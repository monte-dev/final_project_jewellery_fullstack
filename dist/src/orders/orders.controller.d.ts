import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dtos/create-order.dto';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getAllOrders(): Promise<({
        products: {
            id: string;
            orderId: string;
            quantity: number;
            additionalInfo: string;
            productId: string;
        }[];
    } & {
        id: string;
        firstName: string;
        lastName: string;
        shippingAddress: string;
        totalAmount: number;
        orderStatus: import(".prisma/client").$Enums.OrderStatus;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    getOrderById(id: string): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        shippingAddress: string;
        totalAmount: number;
        orderStatus: import(".prisma/client").$Enums.OrderStatus;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createOrder(orderData: CreateOrderDto): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        shippingAddress: string;
        totalAmount: number;
        orderStatus: import(".prisma/client").$Enums.OrderStatus;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteOrder(id: string): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        shippingAddress: string;
        totalAmount: number;
        orderStatus: import(".prisma/client").$Enums.OrderStatus;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
