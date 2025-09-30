import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import escpos from 'escpos';
import * as fs from 'fs';
import { DateTime } from 'luxon';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../prisma/prisma.service/local-prisma.service';
import { ConnectionService } from '../connection/connection.service';

// Register adapters
escpos.USB = require('escpos-usb');
escpos.Network = require('escpos-network');
escpos.Serial = require('escpos-serialport');
escpos.File = require('escpos-file');

@Injectable()
export class PrintService {
  private readonly logger = new Logger(PrintService.name);

  constructor(
    private cloudPrisma: CloudPrismaService,
    private localPrisma: LocalPrismaService,
    private connectionService: ConnectionService,
  ) { }

  async invokePrinter(
    invoiceId: number,
    mode: 'printer' | 'emulator' = 'emulator',
  ): Promise<string> {
    const isOnline = this.connectionService.getConnectionStatus();

    if (isOnline) {
      return await this.cloudPrisma.$transaction(async (tx) => {
        return await this.printInvoiceCloud(invoiceId, mode, tx);
      });
    } else {
      return await this.localPrisma.$transaction(async (tx) => {
        return await this.printInvoiceLocal(invoiceId, mode, tx);
      });
    }
  }

  // Cloud database print method
  private async printInvoiceCloud(
    invoiceId: number,
    mode: 'printer' | 'emulator' = 'emulator',
    tx: any,
  ): Promise<string> {
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

    const settings = await tx.settings.findUnique({ where: { userId: 1 } });
    return await this.processPrint(invoice, settings, mode);
  }

  // Local database print method
  private async printInvoiceLocal(
    invoiceId: number,
    mode: 'printer' | 'emulator' = 'emulator',
    tx: any,
  ): Promise<string> {
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

    const settings = await tx.settings.findUnique({ where: { userId: 1 } });
    return await this.processPrint(invoice, settings, mode);
  }

  // Common print processing logic
  private async processPrint(
    invoice: any,
    settings: any,
    mode: 'printer' | 'emulator',
  ): Promise<string> {
    const timezone = settings?.timezone || 'UTC';
    const printerType = settings?.printerType?.toUpperCase() || 'EMULATOR';
    const printerIp = settings?.printerIp || null;
    const port = settings?.port || null;

    const formattedDate = DateTime.fromJSDate(invoice.createdAt, { zone: 'utc' })
      .setZone(timezone)
      .toFormat('MMM dd, yyyy, hh:mm a');

    const subtotal = invoice.items.reduce((sum, item) => sum + item.total, 0);
    const discount = invoice.discount ?? 0;
    const total = invoice.totalPrice;

    if (mode === 'printer' && printerType !== 'EMULATOR') {
      try {
        let device: any;

        if (printerType === 'USB') {
          device = new escpos.USB();
        } else if (printerType === 'LAN' && printerIp) {
          device = new escpos.Network(printerIp, port);
        } else {
          this.logger.warn('⚠️ No valid printer configuration, using emulator');
          return await this.emulator(invoice, formattedDate, subtotal, discount, total);
        }

        const printer = new escpos.Printer(device);

        return await new Promise((resolve) => {
          device.open((err) => {
            if (err) {
              this.logger.error('❌ Failed to open printer:', err);
              resolve(`⚠️ Printer not found. Invoice ${invoice.id} could not be printed.`);
              return;
            }

            printer
              .align('ct')
              .style('b')
              .size(1, 1)
              .text('*** LOYALTY RECEIPT ***')
              .text(`Invoice #${invoice.id}`)
              .text(`Date: ${formattedDate}`)
              .text(`Customer: ${invoice.user?.enName ?? invoice.phone ?? invoice.email ?? 'Guest'}`)
              .drawLine();

            printer.align('lt').text('Item               Price   Qty   Total');
            printer.drawLine();

            invoice.items.forEach((item) => {
              const name = item.cafeProduct?.enName || item.restaurantProduct?.enName || 'Item';
              const unitPrice = item.price.toFixed(2);
              const qty = `x${item.quantity}`;
              const lineTotal = item.total.toFixed(2);
              const line = `${name.padEnd(18).slice(0, 18)} ${unitPrice.padStart(6)}  ${qty.padStart(3)}  ${lineTotal.padStart(7)}`;
              printer.text(line);
            });

            if (discount > 0) {
              printer.text(`SUBTOTAL: ${subtotal.toFixed(2)}`);
              printer.text(`DISCOUNT: ${discount}%`);
            }
            printer.text(`TOTAL:    ${total.toFixed(2)}`);
            printer.text(`POINTS EARNED: ${invoice.points}`)
              .text('Thank you for your purchase!')
              .cut()
              .close();

            this.logger.log(`🖨️ Invoice ${invoice.id} sent to ${printerType} printer`);
            resolve(`Invoice ${invoice.id} printed on ${printerType} device`);
          });
        });
      } catch (err) {
        this.logger.error('❌ Error while printing:', err);
        return `⚠️ Printer not found. Invoice ${invoice.id} could not be printed.`;
      }
    } else {
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
    lines.push(`Customer: ${invoice.user?.enName ?? invoice.phone ?? invoice.email ?? 'Guest'}`);
    lines.push('--------------------------------------');
    lines.push('Item               Price   Qty   Total');
    lines.push('--------------------------------------');

    invoice.items.forEach((item) => {
      const name = item.cafeProduct?.enName || item.restaurantProduct?.enName || 'Item';
      const unitPrice = item.price.toFixed(2);
      const qty = `x${item.quantity}`;
      const lineTotal = item.total.toFixed(2);
      const line = `${name.padEnd(18).slice(0, 18)} ${unitPrice.padStart(6)}  ${qty.padStart(3)}  ${lineTotal.padStart(7)}`;
      lines.push(line);
    });

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