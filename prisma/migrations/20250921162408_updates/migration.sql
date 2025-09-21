-- AlterTable
ALTER TABLE "public"."Invoice" ALTER COLUMN "points" SET DEFAULT 0,
ALTER COLUMN "points" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "public"."InvoiceItem" ADD COLUMN     "categoryId" INTEGER;

-- AlterTable
ALTER TABLE "public"."Transaction" ALTER COLUMN "points" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "points" SET DEFAULT 0,
ALTER COLUMN "points" SET DATA TYPE DOUBLE PRECISION;

-- AddForeignKey
ALTER TABLE "public"."InvoiceItem" ADD CONSTRAINT "InvoiceItem_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
