-- CreateTable
CREATE TABLE "Alarm" (
    "id" SERIAL NOT NULL,
    "sound" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Alarm_pkey" PRIMARY KEY ("id")
);
