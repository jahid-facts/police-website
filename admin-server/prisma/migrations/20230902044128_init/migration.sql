/*
  Warnings:

  - You are about to drop the column `date` on the `latest_news` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `latest_news` table. All the data in the column will be lost.
  - Added the required column `title` to the `Latest_News` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Latest_News` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `latest_news` DROP COLUMN `date`,
    DROP COLUMN `description`,
    ADD COLUMN `content` LONGTEXT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `file` VARCHAR(191) NULL,
    ADD COLUMN `title` TEXT NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
