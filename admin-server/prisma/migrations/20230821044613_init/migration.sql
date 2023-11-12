/*
  Warnings:

  - You are about to drop the column `headindId` on the `footer_data` table. All the data in the column will be lost.
  - Added the required column `headingId` to the `Footer_Data` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `footer_data` DROP FOREIGN KEY `Footer_Data_headindId_fkey`;

-- AlterTable
ALTER TABLE `footer_data` DROP COLUMN `headindId`,
    ADD COLUMN `headingId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Footer_Data` ADD CONSTRAINT `Footer_Data_headingId_fkey` FOREIGN KEY (`headingId`) REFERENCES `Footer_Heading`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
