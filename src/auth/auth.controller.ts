import {
  Body,
  Controller,
  Post,
  Put,
  Delete,
  UseGuards,
  Request,
  Response,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDTO } from './dtos/register-user.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async registerUser(@Body() newUserData: RegisterUserDTO) {
    return this.authService.registerUser(newUserData);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Response() res) {
    const tokens = await this.authService.createSession(req.user);
    res.cookie('auth', tokens, { httpOnly: true });
    res.send({
      message: 'success',
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete('logout')
  async logout(@Response() res) {
    res.clearCookie('auth', { httpOnly: true });
    res.send({
      message: 'Success',
    });
  }
}
