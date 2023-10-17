import { ProductsService } from './products.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getAll(): Promise<{
        id: string;
        name: string;
        description: string;
        price: number;
        stockQuantity: number;
        rating: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getById(id: string): Promise<{
        id: string;
        name: string;
        description: string;
        price: number;
        stockQuantity: number;
        rating: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
