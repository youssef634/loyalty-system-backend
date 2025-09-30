/*
  Warnings:

  - You are about to drop the column `description` on the `Settings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Settings" DROP COLUMN "description",
ADD COLUMN     "arDescription" TEXT,
ADD COLUMN     "enDescription" TEXT;
