export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  rating: number;
  images: {
    id: string;
    name: string;
    productId: string;
  }[];
}
