import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CloudPrismaService} from '../prisma/prisma.service/cloud-prisma.service';
import { Role } from '@prisma/client';

@Injectable()
export class RolesService {
    constructor(private prisma: CloudPrismaService) { }
    
    async hasPagePermission(userRole: Role, pageName: string): Promise<boolean> {
        if (userRole === Role.ADMIN) return true;

        const permission = await this.prisma.rolePermission.findFirst({
            where: { role: userRole, page: pageName },
        });

        return !!permission;
    }

    async createPermission(role: Role, pages: string[]) {
        if (!pages || pages.length === 0) throw new BadRequestException('Pages required');

        const created = [];
        for (const page of pages) {
            const exists = await this.prisma.rolePermission.findUnique({
                where: { role_page: { role, page } }, // composite unique
            });
            if (!exists) {
                const perm = await this.prisma.rolePermission.create({
                    data: { role, page },
                });
                created.push(perm);
            }
        }
        return created;
    }

    async updatePermissions(role: Role, pages: string[]) {
        // Delete all old permissions for this role
        await this.prisma.rolePermission.deleteMany({ where: { role } });

        // Add new permissions
        const created = await Promise.all(
            pages.map(page => this.prisma.rolePermission.create({ data: { role, page } }))
        );
        return created;
    }

    async getPermissions(role: Role) {
        return this.prisma.rolePermission.findMany({ where: { role } });
    }
}