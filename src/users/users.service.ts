import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Password } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  public async getAll(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  public async getById(id: User['id']): Promise<User | null> {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found...');
    }

    return user;
  }

  public async getByEmail(
    email: User['email'],
  ): Promise<(User & { password: Password }) | null> {
    const user = await this.prismaService.user.findUnique({
      where: { email },
      include: { password: true },
    });

    if (!user) {
      throw new NotFoundException('User not found...');
    }

    return user;
  }

  async createUser(
    userData: Omit<User, 'id' | 'role'>,
    password: Password['hashedPassword'],
  ): Promise<User> {
    try {
      return await this.prismaService.user.create({
        data: {
          ...userData,
          password: {
            create: {
              hashedPassword: password,
            },
          },
        },
      });
    } catch (error) {
      if (error.code === 'P2002' && error.meta.target.includes('email')) {
        throw new ConflictException('User with this email already exists');
      }
      throw error;
    }
  }

  async updateById(
    userId: User['id'],
    userData: Omit<User, 'id' | 'role'>,
    password?: string | undefined,
  ) {
    if (password !== undefined) {
      return await this.prismaService.user.update({
        where: { id: userId },
        data: {
          ...userData,
          password: {
            update: {
              hashedPassword: password,
            },
          },
        },
      });
    }

    try {
      return await this.prismaService.user.update({
        where: { id: userId },
        data: userData,
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`User ID: ${userId} not found.`);
      }
      throw error;
    }
  }

  async deleteById(id: User['id']) {
    try {
      return this.prismaService.user.delete({
        where: { id },
      });
    } catch (error) {
      if (error.code === 'P2025') {
      }
      throw new NotFoundException(`User ID: ${id} not found.`);
    }
  }
}
