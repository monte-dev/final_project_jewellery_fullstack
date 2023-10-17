import { AuthService } from './auth.service';
import { RegisterUserDTO } from './dtos/register-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    registerUser(newUserData: RegisterUserDTO): Promise<{
        id: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    login(req: any, res: any): Promise<void>;
    logout(res: any): Promise<void>;
}
