/*
  Warnings:

  - You are about to drop the `Token` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('ADMIN', 'USER');

-- DropForeignKey
ALTER TABLE "Token" DROP CONSTRAINT "Token_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT,
ADD COLUMN     "rol" "Roles" NOT NULL DEFAULT 'USER',
ADD COLUMN     "username" TEXT;

-- DropTable
DROP TABLE "Token";

-- DropTable
DROP TABLE "VerificationToken";

-- DropEnum
DROP TYPE "TokenType";

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
