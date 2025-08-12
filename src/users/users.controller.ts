import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, Request, Query, Req, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';
import { AuthGuard } from '@nestjs/passport';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as fs from 'fs';
import { Response } from 'express';
import { format } from '@fast-csv/format';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    // Get users with pagination & filters
    @Get(":page")
    getUsers(
        @Param("page") page: number,
        @Req() req,
        @Query('id') id?: number,
        @Query('enName') enName?: string,
        @Query('arName') arName?: string,
        @Query('email') email?: string,
        @Query('phone') phone?: string,
    ) {
        return this.usersService.getAllUsers(
            req.user.id,
            Number(page) || 1,
            {
                id: id ? Number(id) : undefined,
                enName: enName || undefined,
                arName: arName || undefined,
                email: email || undefined,
                phone: phone || undefined,
            },
        );
    }

    @Post()
    addUser(@Request() req, @Body() data: CreateUserDto) {
        return this.usersService.addUser(req.user.id, data);
    }

    @Delete(':id')
    deleteUser(@Request() req, @Param('id') id: string) {
        return this.usersService.deleteUser(req.user.id, Number(id));
    }

    @Patch(':id')
    updateUser(@Request() req, @Param('id') id: string, @Body() data: UpdateUserDto) {
        return this.usersService.updateUser(req.user.id, Number(id), data);
    }

    @Post('scan-qr')
    @UseInterceptors(FileInterceptor('qrImage', {
        storage: diskStorage({
            destination: (req, file, cb) => {
                const uploadDir = './uploads/qrcodes';
                // Create directory if it doesn't exist
                if (!fs.existsSync(uploadDir)) {
                    fs.mkdirSync(uploadDir, { recursive: true });
                }
                cb(null, uploadDir);
            },
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                return cb(null, `${randomName}${extname(file.originalname)}`);
            }
        }),
        fileFilter: (req, file, cb) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
                return cb(new Error('Only image files are allowed!'), false);
            }
            cb(null, true);
        }
    }))
    async scanQr(
        @Req() req,
        @UploadedFile() file: Express.Multer.File
    ) {
        return this.usersService.scanQr(req.user.id, file);
    }

    @Post('add-points/:id')
    addPoints(
        @Request() req,
        @Param('id') id: string,
        @Body('points') points: string
    ) {
        return this.usersService.addPoints(req.user.id, Number(id), Number(points));
    }

    @Get('export/csv')  // Changed from 'export-csv' to 'export/csv' for better REST conventions
    async exportCSV(@Request() req, @Res() res: Response) {
        try {
            const users = await this.usersService.getAllUsersForExport(req.user.id);

            // Set correct headers with filename
            res.setHeader('Content-Disposition', 'attachment; filename="users.csv"');
            res.setHeader('Content-Type', 'text/csv; charset=utf-8');

            // Write UTF-8 BOM for Excel + Arabic compatibility
            res.write('\uFEFF');

            const csvStream = format({ headers: true });
            csvStream.pipe(res);

            users.forEach(user => csvStream.write(user));
            csvStream.end();
        } catch (error) {
            res.status(500).json({ error: 'Failed to export CSV' });
        }
    }

    // Export users to PDF (Direct Download)
    @Get('export/pdf')
    async exportPDF(@Request() req, @Res() res: Response) {
        try {
            const users = await this.usersService.getAllUsersForExport(req.user.id);

            res.setHeader('Content-Disposition', 'attachment; filename="users.pdf"');
            res.setHeader('Content-Type', 'application/pdf');

            const PDFDocument = require('pdfkit');
            const path = require('path');

            const doc = new PDFDocument({ margin: 10, size: 'A4' });

            // Load custom fonts
            const arabicFontPath = path.join(process.cwd(), 'fonts', 'Amiri-Regular.ttf'); // Arabic font
            const englishFontPath = path.join(process.cwd(), 'fonts', 'ARIAL.ttf'); // English font
            doc.registerFont('Arabic', arabicFontPath);
            doc.registerFont('English', englishFontPath);

            doc.pipe(res);

            // Title
            doc.font('English').fontSize(20).text('Users Report', { align: 'center' });
            doc.moveDown(2);

            // Table column headers
            const tableTop = 100;
            const colWidths = [30, 110, 90, 150, 100, 60, 50];
            const cellHeight = 25;
            const headers = ['ID', 'English Name', 'Arabic Name', 'Email', 'Phone', 'Role', 'Points'];

            let x = doc.page.margins.left;
            let y = tableTop;

            // Header background
            doc.rect(x, y, colWidths.reduce((a, b) => a + b), cellHeight).fill('#e0e0e0').stroke();
            doc.fillColor('#000').font('English').fontSize(10);

            headers.forEach((header, i) => {
                doc.text(header, x + 5, y + 7, { width: colWidths[i], align: 'left' });
                x += colWidths[i];
            });

            // Helper function to reverse Arabic text
            const reverseArabicText = (text: string): string => {
                // Simple reversal for Arabic text (split by space, reverse, and join)
                return text.split(' ').reverse().join(' ');
            };

            // Rows
            y += cellHeight;
            doc.fontSize(9);

            users.forEach((user, idx) => {
                x = doc.page.margins.left;

                // Alternate row background
                if (idx % 2 === 0) {
                    doc.rect(x, y, colWidths.reduce((a, b) => a + b), cellHeight).fill('#f9f9f9').stroke();
                    doc.fillColor('#000');
                }

                const row = [
                    user.id,
                    { text: user.enName || 'N/A', font: 'English' },
                    { text: user.arName ? reverseArabicText(user.arName) : 'N/A', font: 'Arabic' }, // Reverse Arabic text
                    { text: user.email || 'N/A', font: 'English' },
                    { text: user.phone || 'N/A', font: 'English' },
                    { text: user.role || 'N/A', font: 'English' },
                    { text: String(user.points || 0), font: 'English' }
                ];

                row.forEach((cell, i) => {
                    if (typeof cell === 'object') {
                        if (cell.font === 'Arabic') {
                            // Align Arabic text to the right
                            doc.font(cell.font).text(
                                cell.text,
                                x,
                                y + 7,
                                {
                                    width: colWidths[i],
                                    align: 'right' // Align text to the right side
                                }
                            );
                        } else {
                            doc.font(cell.font).text(cell.text, x + 5, y + 7, { width: colWidths[i], align: 'left' });
                        }
                    } else {
                        doc.text(String(cell), x + 5, y + 7, { width: colWidths[i], align: 'left' });
                    }
                    x += colWidths[i];
                });

                y += cellHeight;

                // New page if needed
                if (y > 750) {
                    doc.addPage();
                    y = tableTop;
                }
            });

            doc.end();

        } catch (error) {
            console.error('PDF Export Error:', error);
            if (!res.headersSent) {
                res.status(500).json({ error: error });
            }
        }
    }
}