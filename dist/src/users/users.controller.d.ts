import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAll(): Promise<{
        id: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
    }[]>;
    getById(id: string): Promise<{
        id: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
