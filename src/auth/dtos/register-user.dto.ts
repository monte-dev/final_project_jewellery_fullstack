import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { Match } from 'src/utils/match.decorator';

export class RegisterUserDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 35)
  password: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 35)
  @Match('password')
  passwordRepeat: string;
}
