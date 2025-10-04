import { Injectable, BadRequestException, NotFoundException, Logger } from '@nestjs/common';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';
import { RewardStatus } from '@prisma/client';
import { use } from 'passport';

@Injectable()
export class RedeemService {
    private readonly logger = new Logger(RedeemService.name);
    constructor(private prisma: CloudPrismaService) { }

    async redeemPoints(userId: number, productId: number, type: 'cafe' | 'restaurant') {
        // Check user
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user) throw new NotFoundException('User not found');

        // Find product
        let product: any;
        if (type === 'cafe') {
            product = await this.prisma.cafeProduct.findUnique({ where: { id: productId } });
        } else if (type === 'restaurant') {
            product = await this.prisma.restaurantProduct.findUnique({ where: { id: productId } });
        }
        if (!product) throw new NotFoundException('Product not found');

        // Check points
        if (user.points < product.points) {
            throw new BadRequestException('Not enough points to redeem this reward');
        }

        // Deduct user points
        await this.prisma.user.update({
            where: { id: userId },
            data: { points: user.points - product.points },
        });

        let settings = await this.prisma.settings.findUnique({ where: { userId: userId } });
        if (!settings) {
            settings = await this.prisma.settings.findUnique({ where: { id: 1 } });
            if (!settings) throw new NotFoundException('Admin settings not found');
        }
        // Create redeem transaction
        await this.prisma.transaction.create({
            data: {
                type: 'redeem',
                currency: { enCurrency: settings.enCurrency, arCurrency: settings.arCurrency },
                points: product.points,
                userId: userId,
                cafeProductId: type === 'cafe' ? productId : null,
                restaurantProductId: type === 'restaurant' ? productId : null,
            },
        });

        // Create reward with status PENDING
        const reward = await this.prisma.myReward.create({
            data: {
                userId: userId,
                cafeProductId: type === 'cafe' ? productId : null,
                restaurantProductId: type === 'restaurant' ? productId : null,
                points: product.points,
                type,
                status: RewardStatus.PENDING,
            },
        });

        // ✅ Create log
        try {
            await this.prisma.createLog.create({
                data: {
                    userId: userId,
                    screen: 'redeem',
                    enMessage: `${user.enName} requested a reward redemption for ${product.enName} (${product.points} points)`,
                    arMessage: `${user.arName} طلب استرداد مكافأة مقابل ${product.arName} (${product.points} نقاط)`,
                }
            });
        } catch (err) {
            this.logger.warn(`⚠️ Failed to create log: ${err}`);
        }

        return {
            message: 'Reward redemption requested successfully',
            reward,
        };
    }
}