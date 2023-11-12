/*
  Warnings:

  - You are about to drop the column `categroyId` on the `notices` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `notices` DROP FOREIGN KEY `Notices_categroyId_fkey`;

-- AlterTable
ALTER TABLE `notices` DROP COLUMN `categroyId`;

-- CreateTable
CREATE TABLE `NoticeCategoryRelation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `noticeId` INTEGER NOT NULL,
    `categoryId` INTEGER NOT NULL,

    UNIQUE INDEX `NoticeCategoryRelation_noticeId_categoryId_key`(`noticeId`, `categoryId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `NoticeCategoryRelation` ADD CONSTRAINT `NoticeCategoryRelation_noticeId_fkey` FOREIGN KEY (`noticeId`) REFERENCES `Notices`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NoticeCategoryRelation` ADD CONSTRAINT `NoticeCategoryRelation_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Notice_Categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
