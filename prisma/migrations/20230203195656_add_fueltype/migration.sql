/*
  Warnings:

  - Changed the type of `type` on the `Fuels` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "FuelType" AS ENUM ('Pertamax_Turbo', 'Pertamax', 'Pertalite', 'Pertamax_Dex', 'Dexlite', 'Bio_Solar');

-- DropIndex
DROP INDEX "Fuels_type_key";

-- AlterTable
ALTER TABLE "Fuels" DROP COLUMN "type",
ADD COLUMN     "type" "FuelType" NOT NULL;

-- CreateIndex
CREATE INDEX "type_cityId_date" ON "Fuels"("type", "cityId", "date");
