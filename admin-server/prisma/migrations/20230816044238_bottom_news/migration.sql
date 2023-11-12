/*
  Warnings:

  - Added the required column `link` to the `Bottom_News` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `bottom_news` ADD COLUMN `link` TEXT NOT NULL;
