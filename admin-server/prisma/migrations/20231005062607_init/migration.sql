-- CreateTable
CREATE TABLE `Ex_Unit_Force` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `designation` VARCHAR(191) NULL,
    `from_date` VARCHAR(191) NULL,
    `to_date` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `unitId` INTEGER NOT NULL,
    `sub_unitId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Ex_Unit_Force` ADD CONSTRAINT `Ex_Unit_Force_unitId_fkey` FOREIGN KEY (`unitId`) REFERENCES `Units`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ex_Unit_Force` ADD CONSTRAINT `Ex_Unit_Force_sub_unitId_fkey` FOREIGN KEY (`sub_unitId`) REFERENCES `Sub_Units`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
