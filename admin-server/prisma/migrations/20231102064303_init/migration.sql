/*
  Warnings:

  - You are about to alter the column `visitor_no` on the `visitor_counter` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `visitor_counter` MODIFY `visitor_no` INTEGER NULL;
