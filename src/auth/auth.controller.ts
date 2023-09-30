import { Body, Controller, Post, Put, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDTO } from './dtos/register-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async registerUser(@Body() newUserData: RegisterUserDTO) {
    return this.authService.registerUser(newUserData);
  }
}
