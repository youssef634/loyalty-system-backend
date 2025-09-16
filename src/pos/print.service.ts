import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import escpos from 'escpos';
import * as fs from 'fs';
import { PrismaService } from '../prisma/prisma.service/prisma.service';
import { DateTime } from 'luxon';

// Tell escpos to use the file adapter
escpos.USB = require('escpos-usb');
escpos.File = require('escpos-file');

@Injectable()
export class PrintService {
  private readonly logger = new Logger(PrintService.name);

  constructor(private prisma: PrismaService) {}

  async printInvoice(invoiceId: number, mode: 'printer' | 'emulator' = 'emulator'): Promise<string> {
    // 🔹 Get invoice with items + user
    const invoice = await this.prisma.invoice.findUnique({
      where: { id: invoiceId },
      include: {
        user: true,
        items: {
          include: {
            cafeProduct: true,
            restaurantProduct: true,
          },
        },
      },
    });

    if (!invoice) {
      throw new NotFoundException(`Invoice ${invoiceId} not found`);
    }

    // 🔹 Get system timezone from settings
    const settings = await this.prisma.settings.findFirst();
    const timezone = settings?.timezone || 'UTC';

    // 🔹 Format invoice date
    const formattedDate = DateTime.fromJSDate(invoice.createdAt, { zone: 'utc' })
      .setZone(timezone)
      .toFormat('MMM dd, yyyy, hh:mm a');

    // 🔹 Calculate subtotal (before discount)
    const subtotal = invoice.items.reduce((sum, item) => sum + item.total, 0);
    const discount = invoice.discount ?? 0;
    const total = invoice.totalPrice;

    if (mode === 'printer') {
      // === ESC/POS thermal printer emulation ===
      const device = new escpos.File('receipt-raw.txt'); // raw escpos codes
      const printer = new escpos.Printer(device);

      return new Promise((resolve) => {
        device.open(() => {
          printer
            .align('ct')
            .style('b')
            .size(1, 1)
            .text('*** LOYALTY RECEIPT ***')
            .text(`Invoice #${invoice.id}`)
            .text(`Date: ${formattedDate}`)
            .text(
              `Customer: ${invoice.user?.enName ?? invoice.phone ?? invoice.email ?? 'Guest'}`
            )
            .drawLine();

          // Header row
          printer.align('lt').text('Item               Price   Qty   Total');
          printer.drawLine();

          // Items
          invoice.items.forEach((item) => {
            const name =
              item.cafeProduct?.enName || item.restaurantProduct?.enName || 'Item';
            const unitPrice = item.price.toFixed(2);
            const qty = `x${item.quantity}`;
            const lineTotal = item.total.toFixed(2);

            // Format columns
            const line = `${name.padEnd(18).slice(0, 18)} ${unitPrice.padStart(6)}  ${qty.padStart(3)}  ${lineTotal.padStart(7)}`;
            printer.text(line);
          });

          printer.drawLine();

          // Totals section
          printer
            .text(`SUBTOTAL: ${subtotal.toFixed(2)}`)
            .text(`DISCOUNT: ${discount}%`)
            .text(`TOTAL:    ${total.toFixed(2)}`)
            .text(`POINTS EARNED: ${invoice.points}`)
            .text('Thank you for your purchase!')
            .cut()
            .close();

          this.logger.log(
            `🖨️ Invoice ${invoiceId} printed (raw ESC/POS) to receipt-raw.txt`
          );
          resolve(`Invoice ${invoiceId} printed in printer mode`);
        });
      });
    } else {
      // === Emulator mode (clean text preview) ===
      const filePath = 'receipt-preview.txt';
      const lines: string[] = [];

      lines.push('*** LOYALTY RECEIPT ***');
      lines.push(`Invoice #${invoice.id}`);
      lines.push(`Date: ${formattedDate}`);
      lines.push(
        `Customer: ${invoice.user?.enName ?? invoice.phone ?? invoice.email ?? 'Guest'}`
      );
      lines.push('--------------------------------------');
      lines.push('Item               Price   Qty   Total');
      lines.push('--------------------------------------');

      invoice.items.forEach((item) => {
        const name =
          item.cafeProduct?.enName || item.restaurantProduct?.enName || 'Item';
        const unitPrice = item.price.toFixed(2);
        const qty = `x${item.quantity}`;
        const lineTotal = item.total.toFixed(2);

        const line = `${name.padEnd(18).slice(0, 18)} ${unitPrice.padStart(6)}  ${qty.padStart(3)}  ${lineTotal.padStart(7)}`;
        lines.push(line);
      });

      lines.push('--------------------------------------');
      lines.push(`SUBTOTAL: ${subtotal.toFixed(2)}`);
      lines.push(`DISCOUNT: ${discount}%`);
      lines.push(`TOTAL:    ${total.toFixed(2)}`);
      lines.push(`POINTS EARNED: ${invoice.points}`);
      lines.push('Thank you for your purchase!');

      fs.writeFileSync(filePath, lines.join('\n'), 'utf8');

      this.logger.log(`📄 Invoice ${invoiceId} written to ${filePath}`);
      return `Invoice ${invoiceId} printed in emulator mode (see ${filePath})`;
    }
  }
}