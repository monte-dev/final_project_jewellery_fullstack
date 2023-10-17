import { OrderStatus } from '@prisma/client';
export declare class CreateOrderDto {
    firstName: string;
    lastName: string;
    shippingAddress: string;
    totalAmount: number;
    userId: string;
    orderStatus: OrderStatus;
    products: {
        orderId: string;
        productId: string;
        quantity: number;
        additionalInfo: string;
    }[];
}
