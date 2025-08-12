/*
  Warnings:

  - You are about to drop the column `productId` on the `Transaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Transaction" DROP COLUMN "productId",
ADD COLUMN     "cafeProductId" INTEGER,
ADD COLUMN     "restaurantProductId" INTEGER;

-- AddForeignKey
ALTER TABLE "public"."Transaction" ADD CONSTRAINT "Transaction_cafeProductId_fkey" FOREIGN KEY ("cafeProductId") REFERENCES "public"."CafeProduct"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Transaction" ADD CONSTRAINT "Transaction_restaurantProductId_fkey" FOREIGN KEY ("restaurantProductId") REFERENCES "public"."RestaurantProduct"("id") ON DELETE SET NULL ON UPDATE CASCADE;
