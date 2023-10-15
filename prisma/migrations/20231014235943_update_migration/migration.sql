/*
  Warnings:

  - Added the required column `additionalInfo` to the `ProductOnOrder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `productonorder` ADD COLUMN `additionalInfo` VARCHAR(191) NOT NULL;
