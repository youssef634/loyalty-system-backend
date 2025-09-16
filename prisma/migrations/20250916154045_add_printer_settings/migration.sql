-- CreateEnum
CREATE TYPE "public"."PrinterType" AS ENUM ('USB', 'LAN');

-- AlterTable
ALTER TABLE "public"."Settings" ADD COLUMN     "printerIp" TEXT,
ADD COLUMN     "printerType" "public"."PrinterType" NOT NULL DEFAULT 'USB';
