-- AlterTable
ALTER TABLE `activities_pages` ADD COLUMN `index` INTEGER NULL,
    ADD COLUMN `status` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `activities_sub_pages` ADD COLUMN `index` INTEGER NULL,
    ADD COLUMN `status` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `administration_pages` ADD COLUMN `index` INTEGER NULL,
    ADD COLUMN `status` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `administration_sub_pages` ADD COLUMN `index` INTEGER NULL,
    ADD COLUMN `status` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `bit_officers` ADD COLUMN `index` INTEGER NULL,
    ADD COLUMN `status` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `bit_police_pages` ADD COLUMN `index` INTEGER NULL,
    ADD COLUMN `status` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `crime_mangement` ADD COLUMN `index` INTEGER NULL,
    ADD COLUMN `status` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `notice_categories` ADD COLUMN `index` INTEGER NULL,
    ADD COLUMN `status` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `service_pages` ADD COLUMN `index` INTEGER NULL,
    ADD COLUMN `status` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `service_sub_pages` ADD COLUMN `index` INTEGER NULL,
    ADD COLUMN `status` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `sub_units` ADD COLUMN `index` INTEGER NULL,
    ADD COLUMN `status` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `thana` ADD COLUMN `index` INTEGER NULL,
    ADD COLUMN `status` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `units` ADD COLUMN `index` INTEGER NULL,
    ADD COLUMN `status` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `zilla_police_pages` ADD COLUMN `index` INTEGER NULL,
    ADD COLUMN `status` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `zilla_police_sub_pages` ADD COLUMN `index` INTEGER NULL,
    ADD COLUMN `status` VARCHAR(191) NULL;
