-- CreateTable
CREATE TABLE "public"."Settings" (
    "id" SERIAL NOT NULL,
    "timezone" TEXT NOT NULL DEFAULT 'UTC',
    "pointsPerDollar" INTEGER NOT NULL DEFAULT 10,
    "pointsPerIQD" INTEGER NOT NULL DEFAULT 1,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);
