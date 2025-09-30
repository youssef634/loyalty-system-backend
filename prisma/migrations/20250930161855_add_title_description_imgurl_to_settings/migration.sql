/*
  Warnings:

  - You are about to drop the column `synced` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `synced` on the `Transaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Invoice" DROP COLUMN "synced";

-- AlterTable
ALTER TABLE "public"."Settings" ADD COLUMN     "description" TEXT,
ADD COLUMN     "imgUrl" TEXT,
ADD COLUMN     "title" TEXT;

-- AlterTable
ALTER TABLE "public"."Transaction" DROP COLUMN "synced";
