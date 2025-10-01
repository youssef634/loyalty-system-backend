-- AlterTable
ALTER TABLE "public"."Invoice" ADD COLUMN     "synced" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "public"."Transaction" ADD COLUMN     "synced" BOOLEAN NOT NULL DEFAULT false;
