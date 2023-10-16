import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

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
      stockQuantity: 4,
      rating: 4.9,
    },
    {
      id: '3f26f6f8-bf41-47f6-931f-6e13eb92c385',
      name: 'Patek Philippe Nautilus',
      description: 'Patek Philippe Nautilus for a sporty look.',
      price: 30000.0,
      stockQuantity: 6,
      rating: 4.8,
    },
    {
      id: 'e9e5c33f-4b08-4b49-9a55-4b1f2a0b54e6',
      name: 'Patek Philippe Aquanaut',
      description: 'Patek Philippe Aquanaut for adventure seekers.',
      price: 22000.0,
      stockQuantity: 4,
      rating: 4.7,
    },
    {
      id: 'b5b94d63-36b7-41a9-b7b6-4bfa6c76bb44',
      name: 'Gold Chain',
      description: 'Classic gold chain for men.',
      price: 800.0,
      stockQuantity: 10,
      rating: 4.6,
    },
    {
      id: 'a3f95f21-92d4-4124-8421-8bfea3bcaf32',
      name: 'Silver Chain',
      description: 'Elegant silver chain for a stylish look.',
      price: 600.0,
      stockQuantity: 12,
      rating: 4.5,
    },
    {
      id: 'c0f74b13-174e-47cd-a6ad-5e2f0f8eb49a',
      name: 'Diamond Chain',
      description: 'Diamond-studded chain for a luxurious look.',
      price: 2000.0,
      stockQuantity: 5,
      rating: 4.7,
    },
    {
      id: 'ac7e6d9a-726a-4a22-83b7-6db4faee2e64',
      name: 'Leather Bracelet',
      description: 'Stylish leather bracelet for men.',
      price: 150.0,
      stockQuantity: 8,
      rating: 4.6,
    },
    {
      id: 'f6e9b5c1-5df3-417f-9a49-3f1f8cbf9a3d',
      name: 'Silver Bracelet',
      description: 'Classic silver bracelet with a modern twist.',
      price: 220.0,
      stockQuantity: 6,
      rating: 4.7,
    },
    {
      id: '4d0c1a3c-65f8-48d9-a8f5-5d8e2b2cc4b8',
      name: 'Gold Bracelet',
      description: 'Elegant gold bracelet for special occasions.',
      price: 300.0,
      stockQuantity: 4,
      rating: 4.8,
    },
    {
      id: 'ae2c8e5b-95a2-47c1-b1b5-7d8c4d2d32d3',
      name: 'Classic Cufflinks',
      description: 'Elegant classic cufflinks for formal events.',
      price: 100.0,
      stockQuantity: 8,
      rating: 4.5,
    },
    {
      id: 'ea8d2b4a-46d3-4a7f-b7f5-6a2c4b3d14d4',
      name: 'Designer Cufflinks',
      description: 'Designer cufflinks with a unique design.',
      price: 150.0,
      stockQuantity: 6,
      rating: 4.6,
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
    {
      id: 'ab5c9b4d-6b3a-4b1a-8b7b-4b6f4c7b6b4d',
      name: 'gold_chain_1.jpg',
      productId: 'b5b94d63-36b7-41a9-b7b6-4bfa6c76bb44',
    },
    {
      id: 'b6a4f5c6-c3b6-4a2e-8b3b-6b2f0f8e0b4a',
      name: 'gold_chain_2.jpg',
      productId: 'b5b94d63-36b7-41a9-b7b6-4bfa6c76bb44',
    },
    {
      id: 'c0b4f7b3-1c4b-4b2d-8b1b-5c2b1a1f0e1c',
      name: 'silver_chain_1.jpg',
      productId: 'a3f95f21-92d4-4124-8421-8bfea3bcaf32',
    },
    {
      id: 'e8f1c3b3-c6c1-4f6f-9b3f-6e1e3b1c2f8c',
      name: 'silver_chain_2.jpg',
      productId: 'a3f95f21-92d4-4124-8421-8bfea3bcaf32',
    },
    {
      id: 'c6b0f74b-1317-4e4c-8f4c-9a6d5e2f0f8e',
      name: 'diamond_chain_1.jpg',
      productId: 'c0f74b13-174e-47cd-a6ad-5e2f0f8eb49a',
    },
    {
      id: 'b6c5b0a1-3f5e-4d9c-9e2f-4b1f8c4c5b1a',
      name: 'diamond_chain_2.jpg',
      productId: 'c0f74b13-174e-47cd-a6ad-5e2f0f8eb49a',
    },
    {
      id: '61b9d0d7-2f90-4ee3-9da8-772890d1143e',
      name: 'leather_bracelet_1.jpg',
      productId: 'ac7e6d9a-726a-4a22-83b7-6db4faee2e64',
    },
    {
      id: '33d1ce61-ed27-4d5f-b42e-754464b06a66',
      name: 'silver_bracelet_1.jpg',
      productId: 'f6e9b5c1-5df3-417f-9a49-3f1f8cbf9a3d',
    },
    {
      id: 'dd3a14a4-e0a9-49d0-8b16-2cb78892b53c',
      name: 'gold_bracelet_1.jpg',
      productId: '4d0c1a3c-65f8-48d9-a8f5-5d8e2b2cc4b8',
    },
    {
      id: 'f132fa1d-6c77-4ee7-8b77-5a8e579260c4',
      name: 'classic_cufflinks_1.jpg',
      productId: 'ae2c8e5b-95a2-47c1-b1b5-7d8c4d2d32d3',
    },
    {
      id: 'db0fd02f-767b-4ad9-b66a-bf22717805e0',
      name: 'designer_cufflinks_1.jpg',
      productId: 'ea8d2b4a-46d3-4a7f-b7f5-6a2c4b3d14d4',
    },
  ];
}

async function seed() {
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );

  await Promise.all(
    getImages().map((image) => {
      return db.image.create({ data: image });
    }),
  );
}

seed();
