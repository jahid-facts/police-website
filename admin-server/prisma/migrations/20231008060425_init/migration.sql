-- AlterTable
ALTER TABLE `bitnews` ADD COLUMN `index` INTEGER NULL;

-- AlterTable
ALTER TABLE `directoris` ADD COLUMN `index` INTEGER NULL;

-- AlterTable
ALTER TABLE `directory_categories` ADD COLUMN `index` INTEGER NULL;

-- AlterTable
ALTER TABLE `notices` ADD COLUMN `index` INTEGER NULL;

-- AlterTable
ALTER TABLE `sub_units` ADD COLUMN `content` LONGTEXT NULL;

-- AlterTable
ALTER TABLE `units` ADD COLUMN `content` LONGTEXT NULL;
