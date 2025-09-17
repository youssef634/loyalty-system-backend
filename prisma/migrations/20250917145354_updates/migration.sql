/*
  Warnings:

  - You are about to drop the column `name` on the `Category` table. All the data in the column will be lost.
  - Added the required column `arName` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enName` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Category" DROP COLUMN "name",
ADD COLUMN     "arName" TEXT NOT NULL,
ADD COLUMN     "enName" TEXT NOT NULL;
