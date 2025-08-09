/*
  Warnings:

  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - Added the required column `arName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "arName" TEXT NOT NULL,
ADD COLUMN     "enName" TEXT NOT NULL,
ADD COLUMN     "profileImage" TEXT;
