-- CreateTable
CREATE TABLE `Title` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `index` INTEGER NULL,
    `status` VARCHAR(191) NULL,
    `content` LONGTEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subtitle` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `titleId` INTEGER NOT NULL,
    `index` INTEGER NULL,
    `status` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subtitle_Pages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `subtitleId` INTEGER NOT NULL,
    `index` INTEGER NULL,
    `status` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subtitle_Subpages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pagesId` INTEGER NOT NULL,
    `name` VARCHAR(191) NULL,
    `designation` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `bcs_batch` VARCHAR(191) NULL,
    `location` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `current_address` VARCHAR(191) NULL,
    `office` VARCHAR(191) NULL,
    `fax` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `from_date` VARCHAR(191) NULL,
    `to_date` VARCHAR(191) NULL,
    `index` INTEGER NULL,
    `status` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subsequence` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subpagesId` INTEGER NOT NULL,
    `title` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `index` INTEGER NULL,
    `status` VARCHAR(191) NULL,
    `content` LONGTEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Subtitle` ADD CONSTRAINT `Subtitle_titleId_fkey` FOREIGN KEY (`titleId`) REFERENCES `Title`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subtitle_Pages` ADD CONSTRAINT `Subtitle_Pages_subtitleId_fkey` FOREIGN KEY (`subtitleId`) REFERENCES `Subtitle`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subtitle_Subpages` ADD CONSTRAINT `Subtitle_Subpages_pagesId_fkey` FOREIGN KEY (`pagesId`) REFERENCES `Subtitle_Pages`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subsequence` ADD CONSTRAINT `Subsequence_subpagesId_fkey` FOREIGN KEY (`subpagesId`) REFERENCES `Subtitle_Subpages`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
