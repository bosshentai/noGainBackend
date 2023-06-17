/*
  Warnings:

  - You are about to drop the column `role` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `employees` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `manager` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_user_id_fkey";

-- DropForeignKey
ALTER TABLE "manager" DROP CONSTRAINT "manager_user_id_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "role";

-- DropTable
DROP TABLE "employees";

-- DropTable
DROP TABLE "manager";

-- DropEnum
DROP TYPE "Status";
