import { PrismaService } from 'src/prisma/prisma.service';
import { User, Password } from '@prisma/client';
export declare class UsersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<User[]>;
    getById(id: User['id']): Promise<User | null>;
    getByEmail(email: User['email']): Promise<(User & {
        password: Password;
    }) | null>;
    createUser(userData: Omit<User, 'id' | 'role'>, password: Password['hashedPassword']): Promise<User>;
    updateById(userId: User['id'], userData: Omit<User, 'id' | 'role'>, password?: string | undefined): Promise<{
        id: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    deleteById(id: User['id']): Promise<{
        id: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
