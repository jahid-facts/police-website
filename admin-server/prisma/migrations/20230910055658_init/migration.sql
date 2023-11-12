-- DropForeignKey
ALTER TABLE `noticecategoryrelation` DROP FOREIGN KEY `NoticeCategoryRelation_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `noticecategoryrelation` DROP FOREIGN KEY `NoticeCategoryRelation_noticeId_fkey`;

-- AddForeignKey
ALTER TABLE `NoticeCategoryRelation` ADD CONSTRAINT `NoticeCategoryRelation_noticeId_fkey` FOREIGN KEY (`noticeId`) REFERENCES `Notices`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NoticeCategoryRelation` ADD CONSTRAINT `NoticeCategoryRelation_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Notice_Categories`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
