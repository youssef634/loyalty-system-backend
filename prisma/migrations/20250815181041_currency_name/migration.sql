/*
  Warnings:

  - You are about to drop the column `currency` on the `Settings` table. All the data in the column will be lost.
  - Added the required column `arCurrency` to the `Settings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enCurrency` to the `Settings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Settings" DROP COLUMN "currency",
ADD COLUMN     "arCurrency" TEXT NOT NULL,
ADD COLUMN     "enCurrency" TEXT NOT NULL;
