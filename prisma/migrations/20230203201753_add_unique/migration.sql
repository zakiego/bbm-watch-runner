/*
  Warnings:

  - A unique constraint covering the columns `[type,cityId,date]` on the table `Fuels` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Fuels_type_cityId_date_key" ON "Fuels"("type", "cityId", "date");
