-- DropForeignKey
ALTER TABLE `works` DROP FOREIGN KEY `Works_workSectionId_fkey`;

-- AddForeignKey
ALTER TABLE `Works` ADD CONSTRAINT `Works_workSectionId_fkey` FOREIGN KEY (`workSectionId`) REFERENCES `Work_Document_Section`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
