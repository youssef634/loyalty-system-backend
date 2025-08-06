-- CreateTable
CREATE TABLE "public"."resetPasswordToken" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "randomCode" INTEGER NOT NULL,
    "token" VARCHAR NOT NULL,

    CONSTRAINT "resetPasswordToken_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."resetPasswordToken" ADD CONSTRAINT "resetPasswordToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
