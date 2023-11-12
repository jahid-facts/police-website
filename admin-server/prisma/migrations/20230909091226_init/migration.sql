/*
  Warnings:

  - Added the required column `designationId` to the `ExSp` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `exsp` ADD COLUMN `designationId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `ExSp` ADD CONSTRAINT `ExSp_designationId_fkey` FOREIGN KEY (`designationId`) REFERENCES `administration_Pages`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
