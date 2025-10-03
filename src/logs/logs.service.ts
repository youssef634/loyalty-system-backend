import { Injectable, NotFoundException } from '@nestjs/common';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';
import { DateTime } from 'luxon';

@Injectable()
export class LogsService {
    constructor(private readonly prisma: CloudPrismaService) { }

    async getLogs(
        currentUserId: number,
        page: number,
        filters: {
            table?: string;
            screen?: string;
            userName?: string;
            date?: string;
            fromDate?: string;
            toDate?: string;
            limit?: number;
        },
    ) {

        let settings = await this.prisma.settings.findUnique({ where: { userId: currentUserId } });
        if (!settings) {
            settings = await this.prisma.settings.findUnique({ where: { id: 1 } });
            if (!settings) throw new NotFoundException('Admin settings not found');
        }
        const timezone = settings?.timezone || 'UTC';

        const { table, screen, userName, date, fromDate, toDate, limit = 20 } = filters;

        const queries = [];

        // Build date filter
        let dateFilter: { gte?: Date; lte?: Date } | undefined;
        if (date) {
            const startOfDay = DateTime.fromISO(date, { zone: timezone }).startOf('day').toUTC();
            const endOfDay = DateTime.fromISO(date, { zone: timezone }).endOf('day').toUTC();
            dateFilter = { gte: startOfDay.toJSDate(), lte: endOfDay.toJSDate() };
        } else if (fromDate || toDate) {
            dateFilter = {};
            if (fromDate) {
                dateFilter.gte = DateTime.fromISO(fromDate, { zone: timezone }).startOf('day').toUTC().toJSDate();
            }
            if (toDate) {
                dateFilter.lte = DateTime.fromISO(toDate, { zone: timezone }).endOf('day').toUTC().toJSDate();
            }
        }

        if (!table || table.toLowerCase() === 'login') {
            queries.push(
                this.prisma.loginLog
                    .findMany({
                        where: {
                            ...(screen ? { screen: { contains: screen, mode: 'insensitive' } } : {}),
                            ...(userName ? { userName: { contains: userName, mode: 'insensitive' } } : {}),
                            ...(dateFilter ? { date: dateFilter } : {}),
                        },
                    })
                    .then((res) =>
                        res.map((r) => ({
                            ...r,
                            table: 'Login',
                            formattedDate: DateTime.fromJSDate(r.date).setZone(timezone).toFormat('MMM dd, yyyy, hh:mm a'),
                        })),
                    ),
            );
        }

        if (!table || table.toLowerCase() === 'create') {
            queries.push(
                this.prisma.createLog
                    .findMany({
                        where: {
                            ...(screen ? { screen: { contains: screen, mode: 'insensitive' } } : {}),
                            ...(userName ? { userName: { contains: userName, mode: 'insensitive' } } : {}),
                            ...(dateFilter ? { date: dateFilter } : {}),
                        },
                    })
                    .then((res) =>
                        res.map((r) => ({
                            ...r,
                            table: 'Create',
                            formattedDate: DateTime.fromJSDate(r.date).setZone(timezone).toFormat('MMM dd, yyyy, hh:mm a'),
                        })),
                    ),
            );
        }

        if (!table || table.toLowerCase() === 'update') {
            queries.push(
                this.prisma.updateLog
                    .findMany({
                        where: {
                            ...(screen ? { screen: { contains: screen, mode: 'insensitive' } } : {}),
                            ...(userName ? { userName: { contains: userName, mode: 'insensitive' } } : {}),
                            ...(dateFilter ? { date: dateFilter } : {}),
                        },
                    })
                    .then((res) =>
                        res.map((r) => ({
                            ...r,
                            table: 'Update',
                            formattedDate: DateTime.fromJSDate(r.date).setZone(timezone).toFormat('MMM dd, yyyy, hh:mm a'),
                        })),
                    ),
            );
        }

        if (!table || table.toLowerCase() === 'delete') {
            queries.push(
                this.prisma.deleteLog
                    .findMany({
                        where: {
                            ...(screen ? { screen: { contains: screen, mode: 'insensitive' } } : {}),
                            ...(userName ? { userName: { contains: userName, mode: 'insensitive' } } : {}),
                            ...(dateFilter ? { date: dateFilter } : {}),
                        },
                    })
                    .then((res) =>
                        res.map((r) => ({
                            ...r,
                            table: 'Delete',
                            formattedDate: DateTime.fromJSDate(r.date).setZone(timezone).toFormat('MMM dd, yyyy, hh:mm a'),
                        })),
                    ),
            );
        }

        // Run all queries in parallel
        const results = (await Promise.all(queries)).flat();

        // Sort by date DESC
        results.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        // Pagination
        const total = results.length;
        const totalPages = Math.ceil(total / limit);
        const start = (page - 1) * limit;
        const paginated = results.slice(start, start + limit);

        return {
            total,
            totalPages,
            currentPage: page,
            logs: paginated,
        };
    }
}