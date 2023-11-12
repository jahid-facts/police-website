/*
  Warnings:

  - Added the required column `multipleImages` to the `Image_Gallery` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `image_gallery` ADD COLUMN `multipleImages` TEXT NOT NULL;
