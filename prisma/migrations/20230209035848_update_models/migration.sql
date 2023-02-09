/*
  Warnings:

  - You are about to drop the column `stock_Id` on the `cashflows` table. All the data in the column will be lost.
  - You are about to drop the column `stock_Id` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `product_Id` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `sellers_Id` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `category_Id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `cashFlow_Id` on the `sellers` table. All the data in the column will be lost.
  - You are about to drop the column `user_Id` on the `sellers` table. All the data in the column will be lost.
  - You are about to drop the column `stockId` on the `suppliers` table. All the data in the column will be lost.
  - Added the required column `stock_id` to the `cashflows` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stock_id` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_id` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellers_id` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `sellers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "cashflows" DROP CONSTRAINT "cashflows_stock_Id_fkey";

-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_stock_Id_fkey";

-- DropForeignKey
ALTER TABLE "clients" DROP CONSTRAINT "clients_product_Id_fkey";

-- DropForeignKey
ALTER TABLE "clients" DROP CONSTRAINT "clients_sellers_Id_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_category_Id_fkey";

-- DropForeignKey
ALTER TABLE "sellers" DROP CONSTRAINT "sellers_cashFlow_Id_fkey";

-- DropForeignKey
ALTER TABLE "sellers" DROP CONSTRAINT "sellers_user_Id_fkey";

-- DropForeignKey
ALTER TABLE "suppliers" DROP CONSTRAINT "suppliers_stockId_fkey";

-- AlterTable
ALTER TABLE "cashflows" DROP COLUMN "stock_Id",
ADD COLUMN     "stock_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "stock_Id",
ADD COLUMN     "stock_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "clients" DROP COLUMN "product_Id",
DROP COLUMN "sellers_Id",
ADD COLUMN     "product_id" TEXT NOT NULL,
ADD COLUMN     "sellers_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "category_Id",
ADD COLUMN     "category_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "sellers" DROP COLUMN "cashFlow_Id",
DROP COLUMN "user_Id",
ADD COLUMN     "cashFlow_id" TEXT,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "suppliers" DROP COLUMN "stockId",
ADD COLUMN     "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "stock_id" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_stock_id_fkey" FOREIGN KEY ("stock_id") REFERENCES "stocks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cashflows" ADD CONSTRAINT "cashflows_stock_id_fkey" FOREIGN KEY ("stock_id") REFERENCES "stocks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sellers" ADD CONSTRAINT "sellers_cashFlow_id_fkey" FOREIGN KEY ("cashFlow_id") REFERENCES "cashflows"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sellers" ADD CONSTRAINT "sellers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_sellers_id_fkey" FOREIGN KEY ("sellers_id") REFERENCES "sellers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "suppliers" ADD CONSTRAINT "suppliers_stock_id_fkey" FOREIGN KEY ("stock_id") REFERENCES "stocks"("id") ON DELETE SET NULL ON UPDATE CASCADE;
