"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const db = new client_1.PrismaClient();
function getProducts() {
    return [
        {
            id: 'a6f54cc0-4ac4-4d64-b04b-9bf4da71f001',
            name: 'Rolex Submariner',
            description: 'Classic Rolex Submariner watch.',
            price: 12000.0,
            stockQuantity: 5,
            rating: 4.9,
        },
        {
            id: 'e2c21b90-87f2-4e6d-9d07-e37bb6b71a7e',
            name: 'Rolex Datejust',
            description: 'Elegant Rolex Datejust watch for any occasion.',
            price: 15000.0,
            stockQuantity: 7,
            rating: 4.8,
        },
        {
            id: '15679f4f-862b-44c5-bfe9-7ebae8db2357',
            name: 'Rolex GMT-Master',
            description: 'Rolex GMT-Master watch for travelers.',
            price: 18000.0,
            stockQuantity: 3,
            rating: 4.7,
        },
        {
            id: 'a10346d7-6d25-4414-9b00-bdace6317242',
            name: 'Patek Philippe Calatrava',
            description: 'Elegant Patek Philippe Calatrava watch.',
            price: 25000.0,
            stockQuantity: 10,
            rating: 4.9,
        },
        {
            id: '3f26f6f8-bf41-47f6-931f-6e13eb92c385',
            name: 'Patek Philippe Nautilus',
            description: 'Patek Philippe Nautilus for a sporty look.',
            price: 30000.0,
            stockQuantity: 0,
            rating: 4.8,
        },
        {
            id: 'e9e5c33f-4b08-4b49-9a55-4b1f2a0b54e6',
            name: 'Patek Philippe Aquanaut',
            description: 'Patek Philippe Aquanaut for adventure seekers.',
            price: 22000.0,
            stockQuantity: 0,
            rating: 4.7,
        },
    ];
}
function getImages() {
    return [
        {
            id: 'dab0e4ca2-418d-41f4-9c35-6f5c0ad9a996',
            name: 'rolex_submariner_1.jpg',
            productId: 'a6f54cc0-4ac4-4d64-b04b-9bf4da71f001',
        },
        {
            id: 'bacf7f6d-acc1-44e4-9b1a-3c4b0f4e1d2e',
            name: 'rolex_submariner_2.jpg',
            productId: 'a6f54cc0-4ac4-4d64-b04b-9bf4da71f001',
        },
        {
            id: 'c94e7d9a-3a6e-4f22-8b37-6b4d2a0e9e6d',
            name: 'rolex_datejust_1.jpg',
            productId: 'e2c21b90-87f2-4e6d-9d07-e37bb6b71a7e',
        },
        {
            id: 'e5d8c2f8-bf1c-4c6f-9f31-6e1e3e1c28f5',
            name: 'rolex_datejust_2.jpg',
            productId: 'e2c21b90-87f2-4e6d-9d07-e37bb6b71a7e',
        },
        {
            id: '9a1c36a7-6d8b-4c1b-9a55-4c5b1a0c9b9e',
            name: 'rolex_gmt_master_1.jpg',
            productId: '15679f4f-862b-44c5-bfe9-7ebae8db2357',
        },
        {
            id: 'bc6c7f8d-4b8b-4a49-8a56-3d5d1e1d0d0d',
            name: 'rolex_gmt_master_2.jpg',
            productId: '15679f4f-862b-44c5-bfe9-7ebae8db2357',
        },
        {
            id: 'a6a3b4d7-7d6a-41d4-9d00-bd6c6e3c7a2c',
            name: 'patek_calatrava_1.jpg',
            productId: 'a10346d7-6d25-4414-9b00-bdace6317242',
        },
        {
            id: '4e2c1f6f-84f6-4b47-9a31-6b1c4c7b1c1e',
            name: 'patek_calatrava_2.jpg',
            productId: 'a10346d7-6d25-4414-9b00-bdace6317242',
        },
        {
            id: 'c3b6b7b9-2b1a-4c22-8b3b-6b3f0b4b1a4b',
            name: 'patek_nautilus_1.jpg',
            productId: '3f26f6f8-bf41-47f6-931f-6e13eb92c385',
        },
        {
            id: 'e1e3c3e3-f4bf-4f61-9a55-4b1f8c1b1f3b',
            name: 'patek_nautilus_2.jpg',
            productId: '3f26f6f8-bf41-47f6-931f-6e13eb92c385',
        },
        {
            id: 'ab1ec7c6-ea2c-4a1f-8b1f-6b2c4b3d1e4d',
            name: 'patek_aquanaut_1.jpg',
            productId: 'e9e5c33f-4b08-4b49-9a55-4b1f2a0b54e6',
        },
        {
            id: 'b4e5e2f5-c3f1-4b8d-9a4b-3f1f8c4bf9a3d',
            name: 'patek_aquanaut_2.jpg',
            productId: 'e9e5c33f-4b08-4b49-9a55-4b1f2a0b54e6',
        },
    ];
}
async function seed() {
    await Promise.all(getProducts().map((product) => {
        return db.product.create({ data: product });
    }));
    await Promise.all(getImages().map((image) => {
        return db.image.create({ data: image });
    }));
}
seed();
//# sourceMappingURL=seed.js.map