import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../prisma/prisma.service/local-prisma.service';
import { ConnectionService } from '../connection/connection.service';
import { Role } from '@prisma/client';

@Injectable()
export class RolesService {
  private readonly logger = new Logger(RolesService.name);

  constructor(
    private cloudPrisma: CloudPrismaService,
    private localPrisma: LocalPrismaService,
    private connectionService: ConnectionService,
  ) { }

  async hasPagePermission(userRole: Role, pageName: string): Promise<boolean> {
    const isOnline = this.connectionService.getConnectionStatus();
    const prismaService = isOnline ? this.cloudPrisma : this.localPrisma;

    if (userRole === Role.ADMIN) return true;

    const permission = await prismaService.rolePermission.findFirst({
      where: { role: userRole, page: pageName },
    });

    return !!permission;
  }

  async createPermission(currentUserId: number, role: Role, pages: string[]) {
    const isOnline = this.connectionService.getConnectionStatus();

    if (!isOnline) {
      throw new BadRequestException('Permission creation requires internet connection');
    }

    const user = await this.cloudPrisma.user.findUnique({ where: { id: currentUserId } });
    if (!user) throw new NotFoundException('User not found');

    if (!pages || pages.length === 0) throw new BadRequestException('Pages required');

    const created = [];
    for (const page of pages) {
      const exists = await this.cloudPrisma.rolePermission.findUnique({
        where: { role_page: { role, page } },
      });
      if (!exists) {
        const perm = await this.cloudPrisma.rolePermission.create({
          data: { role, page },
        });
        created.push(perm);

        // ✅ Create log
        try {
          await this.cloudPrisma.createLog.create({
            data: {
              userId: currentUserId,
              userName: user.enName,
              screen: 'managers',
              message: `${user.enName} create permissions for role ${role} on page ${page}`,
            }
          });
        } catch (err) {
          this.logger.warn(`⚠️ Failed to create log: ${err}`);
        }

        // Sync to local database
        try {
          await this.localPrisma.rolePermission.create({
            data: { id: perm.id, role, page },
          });
          this.logger.log(`Permission for role ${role} and page ${page} synced to local database`);
        } catch (error) {
          this.logger.warn(`Failed to sync permission for role ${role} and page ${page} to local DB: ${error}`);
        }
      }
    }

    return created;
  }

  async updatePermissions(currentUserId: number, role: Role, pages: string[]) {
    const isOnline = this.connectionService.getConnectionStatus();

    if (!isOnline) {
      throw new BadRequestException('Permission updates require internet connection');
    }

    const user = await this.cloudPrisma.user.findUnique({ where: { id: currentUserId } });
    if (!user) throw new NotFoundException('User not found');

    // Delete all old permissions for this role in cloud
    await this.cloudPrisma.rolePermission.deleteMany({ where: { role } });

    // Add new permissions in cloud
    const created = await Promise.all(
      pages.map(page =>
        this.cloudPrisma.rolePermission.create({ data: { role, page } })
      )
    );

    // ✅ Update log
    try {
      await this.cloudPrisma.createLog.create({
        data: {
          userId: currentUserId,
          userName: user.enName,
          screen: 'managers',
          message: `${user.enName} update permissions for role ${role} on page ${pages.join(', ')}`,
        }
      });
    } catch (err) {
      this.logger.warn(`⚠️ Failed to create update log: ${err}`);
    }

    // Sync to local database with the same IDs
    try {
      await this.localPrisma.rolePermission.deleteMany({ where: { role } });

      await Promise.all(
        created.map(perm =>
          this.localPrisma.rolePermission.create({
            data: {
              id: perm.id,
              role: perm.role,
              page: perm.page,
            },
          })
        )
      );

      this.logger.log(`Permissions for role ${role} synced to local database`);
    } catch (error) {
      this.logger.warn(
        `Failed to sync permissions for role ${role} to local DB: ${error}`,
      );
    }

    return created;
  }

  async getPermissions(role: Role) {
    const isOnline = this.connectionService.getConnectionStatus();
    const prismaService = isOnline ? this.cloudPrisma : this.localPrisma;

    return prismaService.rolePermission.findMany({ where: { role } });
  }
}