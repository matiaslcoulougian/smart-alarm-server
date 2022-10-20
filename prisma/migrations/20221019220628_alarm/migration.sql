-- CreateTable
CREATE TABLE "alarm" (
    "id" TEXT NOT NULL,
    "days" JSONB NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "deviceId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "alarm_pkey" PRIMARY KEY ("id")
);
