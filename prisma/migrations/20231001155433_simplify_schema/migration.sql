/*
  Warnings:

  - You are about to alter the column `orderStatus` on the `order` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum("Order_orderStatus")`.
  - You are about to drop the `_carttocartitem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_carttoorder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cartitem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `images` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_carttocartitem` DROP FOREIGN KEY `_CartToCartItem_A_fkey`;

-- DropForeignKey
ALTER TABLE `_carttocartitem` DROP FOREIGN KEY `_CartToCartItem_B_fkey`;

-- DropForeignKey
ALTER TABLE `_carttoorder` DROP FOREIGN KEY `_CartToOrder_A_fkey`;

-- DropForeignKey
ALTER TABLE `_carttoorder` DROP FOREIGN KEY `_CartToOrder_B_fkey`;

-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `Cart_userId_fkey`;

-- DropForeignKey
ALTER TABLE `cartitem` DROP FOREIGN KEY `CartItem_productId_fkey`;

-- DropForeignKey
ALTER TABLE `images` DROP FOREIGN KEY `Images_productId_fkey`;

-- AlterTable
ALTER TABLE `order` MODIFY `orderStatus` ENUM('PROCESSING', 'SHIPPED', 'DELIVERED') NOT NULL;

-- DropTable
DROP TABLE `_carttocartitem`;

-- DropTable
DROP TABLE `_carttoorder`;

-- DropTable
DROP TABLE `cart`;

-- DropTable
DROP TABLE `cartitem`;

-- DropTable
DROP TABLE `images`;

-- CreateTable
CREATE TABLE `Image` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Image_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductOnOrder` (
    `id` VARCHAR(191) NOT NULL,
    `orderId` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `productId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductOnOrder` ADD CONSTRAINT `ProductOnOrder_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductOnOrder` ADD CONSTRAINT `ProductOnOrder_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
