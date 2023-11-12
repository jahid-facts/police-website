-- CreateTable
CREATE TABLE `Bit_Officers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `thanaId` INTEGER NOT NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `fax` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `current_address` VARCHAR(191) NULL,
    `location` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `designation` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Bit_Officers` ADD CONSTRAINT `Bit_Officers_thanaId_fkey` FOREIGN KEY (`thanaId`) REFERENCES `Thana`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
