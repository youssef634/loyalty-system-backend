/*
  Warnings:

  - You are about to drop the column `category` on the `CafeProduct` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `RestaurantProduct` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."CategoryType" AS ENUM ('CAFE', 'RESTAURANT');

-- AlterTable
ALTER TABLE "public"."CafeProduct" DROP COLUMN "category",
ADD COLUMN     "categoryId" INTEGER;

-- AlterTable
ALTER TABLE "public"."RestaurantProduct" DROP COLUMN "category",
ADD COLUMN     "categoryId" INTEGER;

-- CreateTable
CREATE TABLE "public"."Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "public"."CategoryType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."CafeProduct" ADD CONSTRAINT "CafeProduct_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RestaurantProduct" ADD CONSTRAINT "RestaurantProduct_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
