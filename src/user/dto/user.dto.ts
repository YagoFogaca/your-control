import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class UserDto {
  @IsString()
  readonly id?: string;

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
