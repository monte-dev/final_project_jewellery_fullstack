import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDTO } from './dtos/register-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  public async registerUser(newUserData: RegisterUserDTO) {
    const hashedPassword = await bcrypt.hash(newUserData.password, 10);

    const userData = {
      email: newUserData.email,
    };

    return this.usersService.createUser(userData, hashedPassword);
  }

  public async validateUser(email: string, password: string) {
    const user = await this.usersService.getByEmail(email);

    if (
      user &&
      (await bcrypt.compare(password, user.password.hashedPassword))
    ) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
