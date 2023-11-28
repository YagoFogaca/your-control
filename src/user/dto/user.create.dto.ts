import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class UserCreateDto {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
