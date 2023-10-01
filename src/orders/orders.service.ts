import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Order, ProductOnOrder } from '@prisma/client';
import { CreateOrderDto } from './dtos/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  public async getAllOrders() {
    return await this.prismaService.order.findMany({
      include: { products: true },
    });
  }

  public async getOrderById(id: string) {
    const order = await this.prismaService.order.findUnique({
      where: { id },
    });
    if (!order) {
      throw new NotFoundException(`Order with ID: ${id} not found.`);
    }

    return order;
  }

  async createOrder(orderData: CreateOrderDto): Promise<Order> {
    const { products, ...orderDetails } = orderData;
    try {
      const productsToAdd = products.map((product) => ({ ...product }));

      const createdOrder = await this.prismaService.order.create({
        data: {
          ...orderDetails,
          products: {
            create: productsToAdd,
          },
        },
        include: {
          products: true,
        },
      });

      return createdOrder;
    } catch (error) {
      throw new Error('Error creating new order');
    }
  }

  async deleteOrder(id: string) {
    return await this.prismaService.order.delete({
      where: { id },
    });
  }
}
