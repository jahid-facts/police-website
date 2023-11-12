/*
  Warnings:

  - You are about to alter the column `expiration_time` on the `reset_token` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `reset_token` MODIFY `expiration_time` INTEGER NOT NULL;
