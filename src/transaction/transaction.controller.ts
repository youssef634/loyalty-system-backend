import { Controller, Get, Delete, Query, Param, Request, ParseIntPipe, UseGuards, Res } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { format } from '@fast-csv/format';

@Controller('transactions')
@UseGuards(AuthGuard('jwt'))
export class TransactionController {
    constructor(private readonly transactionService: TransactionService) { }

    @Get(":page")
    getTransactions(
        @Param('page') page: number,
        @Request() req,
        @Query('id') id?: number,
        @Query('type') type?: string,
        @Query('pointsMin') pointsMin?: number,
        @Query('pointsMax') pointsMax?: number,
        @Query('date') date?: string,
        @Query('userId') userId?: number,
        @Query('cafeProductId') cafeProductId?: number,
        @Query('restaurantProductId') restaurantProductId?: number,
    ) {
        return this.transactionService.getTransactions(req.user.id, Number(page), {
            id: id ? Number(id) : undefined,
            type,
            pointsMin: pointsMin ? Number(pointsMin) : undefined,
            pointsMax: pointsMax ? Number(pointsMax) : undefined,
            date,
            userId: userId ? Number(userId) : undefined,
            cafeProductId: cafeProductId ? Number(cafeProductId) : undefined,
            restaurantProductId: restaurantProductId ? Number(restaurantProductId) : undefined,
        });
    }

    @Delete(':id')
    deleteTransaction(
        @Request() req,
        @Param('id', ParseIntPipe) id: number
    ) {
        return this.transactionService.deleteTransaction(req.user.id, id);
    }

    @Get('export/csv')
    async exportTransactionsCSV(@Request() req, @Res() res: Response) {
        try {
            const transactions = await this.transactionService.getAllTransactionsForExport(req.user.id);

            res.setHeader('Content-Disposition', 'attachment; filename="transactions.csv"');
            res.setHeader('Content-Type', 'text/csv; charset=utf-8');
            res.write('\uFEFF'); // BOM for Excel/Arabic

            const csvStream = format({ headers: true });
            csvStream.pipe(res);

            transactions.forEach(t => {
                csvStream.write({
                    ID: t.id,
                    Type: t.type,
                    Points: t.points,
                    Date: t.date.toISOString(),
                    UserEnglish: t.user.enName || 'N/A',
                    UserArabic: t.user.arName || 'N/A',
                    UserEmail: t.user.email || 'N/A',
                    ProductEnglish: t.cafeProduct?.enName || t.restaurantProduct?.enName || 'N/A',
                    ProductArabic: t.cafeProduct?.arName || t.restaurantProduct?.arName || 'N/A'
                });
            });

            csvStream.end();
        } catch (error) {
            res.status(500).json({ error: 'Failed to export CSV' });
        }
    }

    @Get('export/pdf')
    async exportTransactionsPDF(@Request() req, @Res() res: Response) {
        try {
            const transactions = await this.transactionService.getAllTransactionsForExport(req.user.id);

            res.setHeader('Content-Disposition', 'attachment; filename="transactions.pdf"');
            res.setHeader('Content-Type', 'application/pdf');

            const PDFDocument = require('pdfkit');
            const path = require('path');
            const doc = new PDFDocument({ margin: 10, size: 'A4' });

            const arabicFontPath = path.join(process.cwd(), 'fonts', 'Amiri-Bold.ttf');
            const englishFontPath = path.join(process.cwd(), 'fonts', 'ARIAL.ttf');
            doc.registerFont('Arabic', arabicFontPath);
            doc.registerFont('English', englishFontPath);

            doc.pipe(res);

            // Title
            doc.font('English').fontSize(20).text('Transactions Report', { align: 'center' });
            doc.moveDown(2);

            // Table column headers
            const tableTop = 100;
            const colWidths = [35, 50, 50, 70, 90, 90, 90, 90]; // Added ID column
            const cellHeight = 25;

            const headers = [
                'ID',
                'Type',
                'Points',
                'Date',
                'User (EN)',
                'User (AR)',
                'Product (EN)',
                'Product (AR)'
            ];

            let x = doc.page.margins.left;
            let y = tableTop;

            // Header background
            doc.rect(x, y, colWidths.reduce((a, b) => a + b), cellHeight).fill('#e0e0e0').stroke();
            doc.fillColor('#000').font('English').fontSize(10);

            headers.forEach((header, i) => {
                doc.text(header, x + 5, y + 7, { width: colWidths[i], align: 'left' });
                x += colWidths[i];
            });

            y += cellHeight;
            doc.fontSize(9);

            transactions.forEach((t, idx) => {
                x = doc.page.margins.left;

                if (idx % 2 === 0) {
                    doc.rect(x, y, colWidths.reduce((a, b) => a + b), cellHeight).fill('#f9f9f9').stroke();
                    doc.fillColor('#000');
                }

                const reverseArabic = (text: string) => text.split(' ').reverse().join(' ');

                const row = [
                    { text: String(t.id), font: 'English' },
                    { text: t.type, font: 'English' },
                    { text: String(t.points), font: 'English' },
                    { text: t.date.toISOString().split('T')[0], font: 'English' },
                    { text: t.user.enName || 'N/A', font: 'English' },
                    { text: t.user.arName ? reverseArabic(t.user.arName) : 'N/A', font: 'Arabic' },
                    { text: t.cafeProduct?.enName || t.restaurantProduct?.enName || 'N/A', font: 'English' },
                    {
                        text: t.cafeProduct?.arName ? reverseArabic(t.cafeProduct.arName) :
                            t.restaurantProduct?.arName ? reverseArabic(t.restaurantProduct.arName) : 'N/A',
                        font: 'Arabic'
                    }
                ];

                row.forEach((cell, i) => {
                    doc.font(cell.font).text(cell.text, x + 5, y + 7, {
                        width: colWidths[i],
                        align: cell.font === 'Arabic' ? 'center' : 'left'
                    });
                    x += colWidths[i];
                });

                y += cellHeight;

                if (y > 750) {
                    doc.addPage();
                    y = tableTop;
                }
            });

            doc.end();
        } catch (error) {
            console.error('PDF Export Error:', error);
            if (!res.headersSent) {
                res.status(500).json({ error: 'Error generating PDF' });
            }
        }
    }
}