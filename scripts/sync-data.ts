import { PrismaClient as MainPrismaClient } from '@prisma/client';
import { PrismaClient as LocalPrismaClient } from '../src/prisma/generated/local';

const mainDb = new MainPrismaClient();
const localDb = new LocalPrismaClient();

async function migrateData() {
  try {
    console.log('Starting data migration...\n');

    // Step 1: Migrate Users (no foreign keys)
    console.log('Migrating Users...');
    const users = await mainDb.user.findMany();
    for (const user of users) {
      await localDb.user.upsert({
        where: { id: user.id },
        update: {
          enName: user.enName,
          arName: user.arName,
          phone: user.phone,
          email: user.email,
          password: user.password,
          profileImage: user.profileImage,
          role: user.role,
          points: user.points,
          qrCode: user.qrCode,
          createdAt: user.createdAt,
        },
        create: user,
      });
    }
    console.log(`✓ Migrated ${users.length} users\n`);

    // Step 2: Migrate RolePermissions (no foreign keys)
    console.log('Migrating Role Permissions...');
    const rolePermissions = await mainDb.rolePermission.findMany();
    for (const perm of rolePermissions) {
      await localDb.rolePermission.upsert({
        where: { 
          role_page: { 
            role: perm.role, 
            page: perm.page 
          } 
        },
        update: {},
        create: perm,
      });
    }
    console.log(`✓ Migrated ${rolePermissions.length} role permissions\n`);

    // Step 3: Migrate ResetPasswordTokens (depends on User)
    console.log('Migrating Reset Password Tokens...');
    const tokens = await mainDb.resetPasswordToken.findMany();
    for (const token of tokens) {
      await localDb.resetPasswordToken.upsert({
        where: { id: token.id },
        update: {
          userId: token.userId,
          randomCode: token.randomCode,
          token: token.token,
          expiresAt: token.expiresAt,
        },
        create: token,
      });
    }
    console.log(`✓ Migrated ${tokens.length} reset password tokens\n`);

    // Step 4: Migrate Categories (no foreign keys)
    console.log('Migrating Categories...');
    const categories = await mainDb.category.findMany();
    for (const category of categories) {
      await localDb.category.upsert({
        where: { id: category.id },
        update: {
          enName: category.enName,
          arName: category.arName,
          type: category.type,
          createdAt: category.createdAt,
        },
        create: category,
      });
    }
    console.log(`✓ Migrated ${categories.length} categories\n`);

    // Step 5: Migrate CafeProducts (depends on Category)
    console.log('Migrating Cafe Products...');
    const cafeProducts = await mainDb.cafeProduct.findMany();
    for (const product of cafeProducts) {
      await localDb.cafeProduct.upsert({
        where: { id: product.id },
        update: {
          enName: product.enName,
          arName: product.arName,
          image: product.image,
          price: product.price,
          points: product.points,
          type: product.type,
          categoryId: product.categoryId,
        },
        create: product,
      });
    }
    console.log(`✓ Migrated ${cafeProducts.length} cafe products\n`);

    // Step 6: Migrate RestaurantProducts (depends on Category)
    console.log('Migrating Restaurant Products...');
    const restaurantProducts = await mainDb.restaurantProduct.findMany();
    for (const product of restaurantProducts) {
      await localDb.restaurantProduct.upsert({
        where: { id: product.id },
        update: {
          enName: product.enName,
          arName: product.arName,
          image: product.image,
          price: product.price,
          points: product.points,
          type: product.type,
          categoryId: product.categoryId,
        },
        create: product,
      });
    }
    console.log(`✓ Migrated ${restaurantProducts.length} restaurant products\n`);

    // Step 7: Migrate Rewards (no foreign keys)
    console.log('Migrating Rewards...');
    const rewards = await mainDb.reward.findMany();
    for (const reward of rewards) {
      await localDb.reward.upsert({
        where: { id: reward.id },
        update: {
          name: reward.name,
          costPoints: reward.costPoints,
          description: reward.description,
        },
        create: reward,
      });
    }
    console.log(`✓ Migrated ${rewards.length} rewards\n`);

    // Step 8: Migrate MyRewards (depends on User, CafeProduct, RestaurantProduct)
    console.log('Migrating My Rewards...');
    const myRewards = await mainDb.myReward.findMany();
    for (const reward of myRewards) {
      await localDb.myReward.upsert({
        where: { id: reward.id },
        update: {
          userId: reward.userId,
          cafeProductId: reward.cafeProductId,
          restaurantProductId: reward.restaurantProductId,
          points: reward.points,
          type: reward.type,
          status: reward.status,
          date: reward.date,
          note: reward.note,
        },
        create: reward,
      });
    }
    console.log(`✓ Migrated ${myRewards.length} my rewards\n`);

    // Step 9: Migrate Settings (depends on User)
    console.log('Migrating Settings...');
    const settings = await mainDb.settings.findMany();
    for (const setting of settings) {
      await localDb.settings.upsert({
        where: { id: setting.id },
        update: {
          userId: setting.userId,
          enTitle: setting.enTitle,
          arTitle: setting.arTitle,
          enDescription: setting.enDescription,
          arDescription: setting.arDescription,
          imgUrl: setting.imgUrl,
          timezone: setting.timezone,
          enCurrency: setting.enCurrency,
          arCurrency: setting.arCurrency,
          usdToIqd: setting.usdToIqd,
          pointsPerDollar: setting.pointsPerDollar,
          pointsPerIQD: setting.pointsPerIQD,
          printerType: setting.printerType,
          printerIp: setting.printerIp,
          port: setting.port,
          updatedAt: setting.updatedAt,
        },
        create: setting,
      });
    }
    console.log(`✓ Migrated ${settings.length} settings\n`);

    // Step 10: Migrate Invoices (depends on User)
    console.log('Migrating Invoices...');
    const invoices = await mainDb.invoice.findMany();
    for (const invoice of invoices) {
      await localDb.invoice.upsert({
        where: { id: invoice.id },
        update: {
          userId: invoice.userId,
          phone: invoice.phone,
          email: invoice.email,
          totalPrice: invoice.totalPrice,
          discount: invoice.discount,
          points: invoice.points,
          currency: invoice.currency,
          createdAt: invoice.createdAt,
          synced: false, // Mark as not synced in local DB
        },
        create: {
          ...invoice,
          synced: false,
        },
      });
    }
    console.log(`✓ Migrated ${invoices.length} invoices\n`);

    // Step 11: Migrate InvoiceItems (depends on Invoice, Category, Products)
    console.log('Migrating Invoice Items...');
    const invoiceItems = await mainDb.invoiceItem.findMany();
    for (const item of invoiceItems) {
      await localDb.invoiceItem.upsert({
        where: { id: item.id },
        update: {
          invoiceId: item.invoiceId,
          cafeProductId: item.cafeProductId,
          restaurantProductId: item.restaurantProductId,
          categoryId: item.categoryId,
          quantity: item.quantity,
          price: item.price,
          total: item.total,
        },
        create: item,
      });
    }
    console.log(`✓ Migrated ${invoiceItems.length} invoice items\n`);

    // Step 12: Migrate Transactions (depends on User, Products, Invoice)
    console.log('Migrating Transactions...');
    const transactions = await mainDb.transaction.findMany();
    for (const transaction of transactions) {
      await localDb.transaction.upsert({
        where: { id: transaction.id },
        update: {
          type: transaction.type,
          currency: transaction.currency as any,
          points: transaction.points,
          date: transaction.date,
          userId: transaction.userId,
          cafeProductId: transaction.cafeProductId,
          restaurantProductId: transaction.restaurantProductId,
          invoiceId: transaction.invoiceId,
          status: transaction.status,
          synced: false, // Mark as not synced in local DB
        },
        create: {
          id: transaction.id,
          type: transaction.type,
          currency: transaction.currency as any,
          points: transaction.points,
          date: transaction.date,
          userId: transaction.userId,
          cafeProductId: transaction.cafeProductId,
          restaurantProductId: transaction.restaurantProductId,
          invoiceId: transaction.invoiceId,
          status: transaction.status,
          synced: false,
        },
      });
    }
    console.log(`✓ Migrated ${transactions.length} transactions\n`);

    console.log('✅ Data migration completed successfully!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    throw error;
  } finally {
    await mainDb.$disconnect();
    await localDb.$disconnect();
  }
}

// Run the migration
migrateData()
  .then(() => {
    console.log('\n🎉 All done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Migration error:', error);
    process.exit(1);
  });