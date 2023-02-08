/*
  Warnings:

  - You are about to drop the column `sellersId` on the `users` table. All the data in the column will be lost.
  - Added the required column `user_Id` to the `sellers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_sellersId_fkey";

-- AlterTable
ALTER TABLE "sellers" ADD COLUMN     "user_Id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "sellersId";

-- AddForeignKey
ALTER TABLE "sellers" ADD CONSTRAINT "sellers_user_Id_fkey" FOREIGN KEY ("user_Id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
