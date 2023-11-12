/*
  Warnings:

  - You are about to drop the `galleryimages` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `multipleImages` on table `image_gallery` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `galleryimages` DROP FOREIGN KEY `GalleryImages_galleryId_fkey`;

-- AlterTable
ALTER TABLE `image_gallery` MODIFY `multipleImages` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `galleryimages`;

-- CreateTable
CREATE TABLE `Video_Gallery` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image` VARCHAR(191) NOT NULL,
    `title` TEXT NOT NULL,
    `content` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
