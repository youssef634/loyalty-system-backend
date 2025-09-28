import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import escpos from 'escpos';
import * as fs from 'fs';
import { PrismaService } from '../prisma/prisma.service/prisma.service';
import { DateTime } from 'luxon';
import { Prisma } from '@prisma/client';

// Register adapters
escpos.USB = require('escpos-usb');
escpos.Network = require('escpos-network');
escpos.Serial = require('escpos-serialport');
escpos.File = require('escpos-file');

@Injectable()
export class PrintService {
  private readonly logger = new Logger(PrintService.name);

  constructor(private prisma: PrismaService) { }

  async invokePrinter(
    invoiceId: number,
    mode: 'printer' | 'emulator' = 'emulator',
 ): Promise<string> {
    return await this.prisma.$transaction(async (tx) => {
      return await this.printInvoice(invoiceId, mode, tx);
    })
  }

  async printInvoice(
    invoiceId: number,
    mode: 'printer' | 'emulator' = 'emulator',
    tx: Prisma.TransactionClient
  ): Promise<string> {
    // Load invoice with items + user
    const invoice = await tx.invoice.findUnique({
      where: { id: invoiceId },
      include: {
        user: true,
        items: {
          include: {
            category: true,
            cafeProduct: true,
            restaurantProduct: true,
          },
        },
      },
    });

    if (!invoice) throw new NotFoundException(`Invoice ${invoiceId} not found`);

    // Get system settings
    const settings = await tx.settings.findUnique({ where: { userId: 1 } });
    const timezone = settings?.timezone || 'UTC';
    const printerType = (settings?.printerType).toUpperCase();
    const printerIp = settings?.printerIp || null;
    const port = settings?.port || null;

    // Format date
    const formattedDate = DateTime.fromJSDate(invoice.createdAt, { zone: 'utc' })
      .setZone(timezone)
      .toFormat('MMM dd, yyyy, hh:mm a');

    // Totals
    const subtotal = invoice.items.reduce((sum, item) => sum + item.total, 0);
    const discount = invoice.discount ?? 0;
    const total = invoice.totalPrice;

    if (mode === 'printer') {
      try {
        let device: any;

        if (printerType === 'USB') {
          device = new escpos.USB();
        } else if (printerType === 'LAN' && printerIp) {
          device = new escpos.Network(printerIp, port); // default port
        } else {
          this.logger.warn('⚠️ No valid printer configuration in settings');
          return await this.emulator(invoice, formattedDate, subtotal, discount, total);
        }

        const printer = new escpos.Printer(device);

        return await new Promise((resolve) => {
          device.open((err) => {
            if (err) {
              this.logger.error('❌ Failed to open printer:', err);
              resolve(
                `⚠️ Printer not found. Invoice ${invoiceId} could not be printed.`,
              );
              return;
            }

            printer
              .align('ct')
              .style('b')
              .size(1, 1)
              .text('*** LOYALTY RECEIPT ***')
              .text(`Invoice #${invoice.id}`)
              .text(`Date: ${formattedDate}`)
              .text(
                `Customer: ${invoice.user?.enName ??
                invoice.phone ??
                invoice.email ??
                'Guest'
                }`,
              )
              .drawLine();

            printer.align('lt').text('Item               Price   Qty   Total');
            printer.drawLine();

            invoice.items.forEach((item) => {
              const name =
                item.cafeProduct?.enName ||
                item.restaurantProduct?.enName ||
                'Item';
              const unitPrice = item.price.toFixed(2);
              const qty = `x${item.quantity}`;
              const lineTotal = item.total.toFixed(2);

              const line = `${name.padEnd(18).slice(0, 18)} ${unitPrice.padStart(
                6,
              )}  ${qty.padStart(3)}  ${lineTotal.padStart(7)}`;
              printer.text(line);
            });

            // Summary section
            if (discount > 0) {
              printer.text(`SUBTOTAL: ${subtotal.toFixed(2)}`);
              printer.text(`DISCOUNT: ${discount}%`);
            }
            printer.text(`TOTAL:    ${total.toFixed(2)}`);
            printer.text(`POINTS EARNED: ${invoice.points}`)
              .text('Thank you for your purchase!')
              .cut()
              .close();

            this.logger.log(
              `🖨️ Invoice ${invoiceId} sent to ${printerType} printer`,
            );
            resolve(`Invoice ${invoiceId} printed on ${printerType} device`);
          });
        });
      } catch (err) {
        this.logger.error('❌ Error while printing:', err);
        return `⚠️ Printer not found. Invoice ${invoiceId} could not be printed.`;
      }
    } else {
      // Fallback to emulator
      return await this.emulator(invoice, formattedDate, subtotal, discount, total);
    }
  }

  private async emulator(
    invoice: any,
    formattedDate: string,
    subtotal: number,
    discount: number,
    total: number,
  ): Promise<string> {
    const filePath = 'receipt-preview.txt';
    const lines: string[] = [];

    lines.push('*** LOYALTY RECEIPT ***');
    lines.push(`Invoice #${invoice.id}`);
    lines.push(`Date: ${formattedDate}`);
    lines.push(
      `Customer: ${invoice.user?.enName ?? invoice.phone ?? invoice.email ?? 'Guest'
      }`,
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

      const line = `${name.padEnd(18).slice(0, 18)} ${unitPrice.padStart(
        6,
      )}  ${qty.padStart(3)}  ${lineTotal.padStart(7)}`;
      lines.push(line);
    });

    // Emulator summary section
    if (discount > 0) {
      lines.push(`SUBTOTAL: ${subtotal.toFixed(2)}`);
      lines.push(`DISCOUNT: ${discount}%`);
    }
    lines.push(`TOTAL:    ${total.toFixed(2)}`);
    lines.push(`POINTS EARNED: ${invoice.points}`);
    lines.push('Thank you for your purchase!');

    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    this.logger.log(`📄 Invoice ${invoice.id} written to ${filePath}`);
    return `Invoice ${invoice.id} printed in emulator mode (see ${filePath})`;
  }
}