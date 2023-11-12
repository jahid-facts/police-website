-- CreateTable
CREATE TABLE `Image_Gallery` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `mainImage` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GalleryImages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Image` VARCHAR(191) NOT NULL,
    `galleryId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `GalleryImages` ADD CONSTRAINT `GalleryImages_galleryId_fkey` FOREIGN KEY (`galleryId`) REFERENCES `Image_Gallery`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
