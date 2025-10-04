/*
  Warnings:

  - You are about to drop the column `userName` on the `CreateLog` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `DeleteLog` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `LoginLog` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `UpdateLog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."CreateLog" DROP COLUMN "userName";

-- AlterTable
ALTER TABLE "public"."DeleteLog" DROP COLUMN "userName";

-- AlterTable
ALTER TABLE "public"."LoginLog" DROP COLUMN "userName";

-- AlterTable
ALTER TABLE "public"."UpdateLog" DROP COLUMN "userName";
