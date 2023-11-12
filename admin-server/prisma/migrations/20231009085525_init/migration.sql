-- AlterTable
ALTER TABLE `directoris` ADD COLUMN `subCategoryId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Directory_Sub_Categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `index` INTEGER NULL,
    `categoryId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Directory_Sub_Categories` ADD CONSTRAINT `Directory_Sub_Categories_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Directory_Categories`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Directoris` ADD CONSTRAINT `Directoris_subCategoryId_fkey` FOREIGN KEY (`subCategoryId`) REFERENCES `Directory_Sub_Categories`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
