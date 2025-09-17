-- CreateEnum
CREATE TYPE "public"."TransactionStatus" AS ENUM ('COMPLETED', 'CANCELLED');

-- AlterTable
ALTER TABLE "public"."Transaction" ADD COLUMN     "status" "public"."TransactionStatus" NOT NULL DEFAULT 'COMPLETED';
