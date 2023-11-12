-- CreateTable
CREATE TABLE `BitNews` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `officerId` INTEGER NOT NULL,
    `content` LONGTEXT NULL,
    `title` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BitNews` ADD CONSTRAINT `BitNews_officerId_fkey` FOREIGN KEY (`officerId`) REFERENCES `Bit_Officers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
