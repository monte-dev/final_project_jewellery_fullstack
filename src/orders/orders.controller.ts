import {
  Controller,
  UseGuards,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateOrderDto } from './dtos/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('')
  getAllOrders() {
    return this.ordersService.getAllOrders();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  getOrderById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.ordersService.getOrderById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/')
  async createOrder(@Body() orderData: CreateOrderDto) {
    return await this.ordersService.createOrder(orderData);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  deleteOrder(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.ordersService.deleteOrder(id);
  }
}
