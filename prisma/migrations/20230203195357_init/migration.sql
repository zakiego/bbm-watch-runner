-- CreateTable
CREATE TABLE "Fuels" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "dateText" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "cityId" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "priceText" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Fuels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" TEXT NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Fuels_type_key" ON "Fuels"("type");

-- CreateIndex
CREATE INDEX "type_cityId_date" ON "Fuels"("type", "cityId", "date");

-- AddForeignKey
ALTER TABLE "Fuels" ADD CONSTRAINT "Fuels_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
