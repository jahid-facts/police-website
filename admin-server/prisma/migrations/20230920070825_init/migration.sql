/*
  Warnings:

  - You are about to drop the column `user_type` on the `user` table. All the data in the column will be lost.
  - Added the required column `role_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `user_type`,
    ADD COLUMN `role_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `home_page` LONGTEXT NOT NULL,
    `work_section` LONGTEXT NOT NULL,
    `footer_section` LONGTEXT NOT NULL,
    `zilla_police` LONGTEXT NOT NULL,
    `administration` LONGTEXT NOT NULL,
    `units` LONGTEXT NOT NULL,
    `activity` LONGTEXT NOT NULL,
    `crime_management` LONGTEXT NOT NULL,
    `service` LONGTEXT NOT NULL,
    `notice_board` LONGTEXT NOT NULL,
    `bit_policing` LONGTEXT NOT NULL,
    `phone_directory` LONGTEXT NOT NULL,
    `user` LONGTEXT NOT NULL,
    `role` LONGTEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `Role`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
