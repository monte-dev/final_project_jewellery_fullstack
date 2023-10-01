import {
  IsNotEmpty,
  IsNumber,
  IsUUID,
  IsString,
  IsOptional,
} from 'class-validator';
import { OrderStatus } from '@prisma/client';

export class CreateOrderDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  shippingAddress: string;

  @IsNumber()
  @IsOptional()
  totalAmount: number;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  orderStatus: OrderStatus;

  products: {
    orderId: string;
    productId: string;
    quantity: number;
    additionalInfo: string;
  }[];
}
