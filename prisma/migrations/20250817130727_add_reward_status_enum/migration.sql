/*
  Warnings:

  - The `status` column on the `MyReward` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `points` to the `MyReward` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."RewardStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterTable
ALTER TABLE "public"."MyReward" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "note" TEXT,
ADD COLUMN     "points" INTEGER NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "public"."RewardStatus" NOT NULL DEFAULT 'PENDING';
