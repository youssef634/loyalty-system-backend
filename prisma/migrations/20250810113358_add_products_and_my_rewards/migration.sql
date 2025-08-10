-- AlterTable
ALTER TABLE "public"."Transaction" ADD COLUMN     "productId" INTEGER;

-- CreateTable
CREATE TABLE "public"."CafeProduct" (
    "id" SERIAL NOT NULL,
    "enName" TEXT NOT NULL,
    "arName" TEXT NOT NULL,
    "image" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "points" INTEGER NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'cafe',

    CONSTRAINT "CafeProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RestaurantProduct" (
    "id" SERIAL NOT NULL,
    "enName" TEXT NOT NULL,
    "arName" TEXT NOT NULL,
    "image" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "points" INTEGER NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'restaurant',

    CONSTRAINT "RestaurantProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."MyReward" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "cafeProductId" INTEGER,
    "restaurantProductId" INTEGER,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "MyReward_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."MyReward" ADD CONSTRAINT "MyReward_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MyReward" ADD CONSTRAINT "MyReward_cafeProductId_fkey" FOREIGN KEY ("cafeProductId") REFERENCES "public"."CafeProduct"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MyReward" ADD CONSTRAINT "MyReward_restaurantProductId_fkey" FOREIGN KEY ("restaurantProductId") REFERENCES "public"."RestaurantProduct"("id") ON DELETE SET NULL ON UPDATE CASCADE;
