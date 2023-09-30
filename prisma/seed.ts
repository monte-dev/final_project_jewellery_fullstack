import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: '37c8cf06-7019-419e-bf62-8fd8ee542db3',
      name: 'Diamond Necklace',
      description: 'Elegant diamond necklace for special occasions.',
      price: 999.99,
      stockQuantity: 10,
      rating: 4.8,
    },
    {
      id: '21c8cf06-7019-419e-bf62-8e8eee542ac2',
      name: 'Gold Earrings',
      description: 'Classic gold earrings with intricate design.',
      price: 249.99,
      stockQuantity: 20,
      rating: 4.5,
    },
    {
      id: '74671c26-9c83-4770-8262-aae7d040e02e',
      name: 'Sapphire Ring',
      description: 'Beautiful sapphire ring with white gold band.',
      price: 799.99,
      stockQuantity: 15,
      rating: 4.7,
    },
    {
      id: '17703295-1f7e-4300-bd7c-515b5fc378f7',
      name: 'Emerald Bracelet',
      description: 'Stunning emerald bracelet with silver links.',
      price: 599.99,
      stockQuantity: 12,
      rating: 4.6,
    },
    {
      id: 'f452f863-95eb-4c8b-9488-3029990e04b5',
      name: 'Pearl Earrings',
      description: 'Timeless pearl earrings with sterling silver hooks.',
      price: 149.99,
      stockQuantity: 25,
      rating: 4.9,
    },
    {
      id: '20ecc699-dff2-4be7-9952-28266fa8d268',
      name: 'Ruby Pendant',
      description: 'Exquisite ruby pendant on a white gold chain.',
      price: 449.99,
      stockQuantity: 18,
      rating: 4.4,
    },
    {
      id: '17794c1e-64c0-45f0-bb3b-347eacc440a3',
      name: 'Amethyst Necklace',
      description: 'Gorgeous amethyst necklace with a unique pendant.',
      price: 299.99,
      stockQuantity: 14,
      rating: 4.7,
    },
    {
      id: '1f325164-ca6d-4f6f-9f40-18c6e5a90cda',
      name: 'Topaz Earrings',
      description: 'Sparkling topaz earrings with a touch of glamour.',
      price: 179.99,
      stockQuantity: 30,
      rating: 4.6,
    },
  ];
}

function getImages() {
  return [
    {
      id: '22e4da5f-3f14-417d-b585-654668079882',
      name: 'diamond_necklace_1.jpg',
      productId: '37c8cf06-7019-419e-bf62-8fd8ee542db3',
    },
    {
      id: '72a1fc5f-ee70-4c13-8565-fb0fd980dae2',
      name: 'diamond_necklace_2.jpg',
      productId: '37c8cf06-7019-419e-bf62-8fd8ee542db3',
    },
    {
      id: 'c7816cc5-8ae1-4e9c-ad2d-cc6310aff3e5',
      name: 'gold_earrings_1.jpg',
      productId: '21c8cf06-7019-419e-bf62-8e8eee542ac2',
    },
    {
      id: 'df61be1e-52b5-4369-b623-ebaed68c0124',
      name: 'gold_earrings_2.jpg',
      productId: '21c8cf06-7019-419e-bf62-8e8eee542ac2',
    },
    {
      id: '9387e5d6-3c17-423e-8fcc-dfc7139d7b2b',
      name: 'sapphire_ring_1.jpg',
      productId: '74671c26-9c83-4770-8262-aae7d040e02e',
    },
    {
      id: 'adc8f671-d3e4-40b2-aea7-36162a70850c',
      name: 'sapphire_ring_2.jpg',
      productId: '74671c26-9c83-4770-8262-aae7d040e02e',
    },
    {
      id: 'bb4f9c5b-023c-4f6b-9156-589106020b18',
      name: 'emerald_bracelet_1.jpg',
      productId: '17703295-1f7e-4300-bd7c-515b5fc378f7',
    },
    {
      id: 'a48ab2f3-aab7-4f21-a7e0-cda9f0f02039',
      name: 'emerald_bracelet_2.jpg',
      productId: '17703295-1f7e-4300-bd7c-515b5fc378f7',
    },
    {
      id: 'f73afe64-2d6d-4745-bd4f-3bc618577260',
      name: 'pearl_earrings_1.jpg',
      productId: 'f452f863-95eb-4c8b-9488-3029990e04b5',
    },
    {
      id: 'c2eec8fe-4da5-4642-a6e4-4bd67a54ff1d',
      name: 'pearl_earrings_2.jpg',
      productId: 'f452f863-95eb-4c8b-9488-3029990e04b5',
    },
    {
      id: '2a62533b-aa4d-4a49-a56a-d1546ef13e0c',
      name: 'ruby_pendant_1.jpg',
      productId: '20ecc699-dff2-4be7-9952-28266fa8d268',
    },
    {
      id: 'ac706fb6-6a2b-4b04-89b9-6a2d938b897d',
      name: 'ruby_pendant_2.jpg',
      productId: '20ecc699-dff2-4be7-9952-28266fa8d268',
    },
    {
      id: '5e14a48e-25d1-4432-b8d7-7718d4da43a9',
      name: 'amethyst_necklace_1.jpg',
      productId: '17794c1e-64c0-45f0-bb3b-347eacc440a3',
    },
    {
      id: '1d12ddd0-5858-4033-8fec-a4940f8de752',
      name: 'amethyst_necklace_2.jpg',
      productId: '17794c1e-64c0-45f0-bb3b-347eacc440a3',
    },
    {
      id: '6fc969a6-b9de-4007-a081-5522fc9a8dfe',
      name: 'topaz_earrings_1.jpg',
      productId: '1f325164-ca6d-4f6f-9f40-18c6e5a90cda',
    },
    {
      id: 'e81b274e-4633-4e11-8b0a-735624d0d075',
      name: 'topaz_earrings_2.jpg',
      productId: '1f325164-ca6d-4f6f-9f40-18c6e5a90cda',
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
      return db.images.create({ data: image });
    }),
  );
}

seed();
