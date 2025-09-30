/*
  Warnings:

  - You are about to drop the column `title` on the `Settings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Settings" DROP COLUMN "title",
ADD COLUMN     "arTitle" TEXT,
ADD COLUMN     "enTitle" TEXT;
