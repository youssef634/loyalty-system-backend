/*
  Warnings:

  - You are about to drop the column `message` on the `CreateLog` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `DeleteLog` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `LoginLog` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `UpdateLog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."CreateLog" DROP COLUMN "message",
ADD COLUMN     "arMessage" TEXT,
ADD COLUMN     "enMessage" TEXT;

-- AlterTable
ALTER TABLE "public"."DeleteLog" DROP COLUMN "message",
ADD COLUMN     "arMessage" TEXT,
ADD COLUMN     "enMessage" TEXT;

-- AlterTable
ALTER TABLE "public"."LoginLog" DROP COLUMN "message",
ADD COLUMN     "arMessage" TEXT,
ADD COLUMN     "enMessage" TEXT;

-- AlterTable
ALTER TABLE "public"."UpdateLog" DROP COLUMN "message",
ADD COLUMN     "arMessage" TEXT,
ADD COLUMN     "enMessage" TEXT;
