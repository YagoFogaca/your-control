import { IsNotEmpty, IsString } from 'class-validator';
import { UserCreateDto } from './user.create.dto';

export class UserDto extends UserCreateDto {
  @IsString()
  @IsNotEmpty()
  readonly id: string;
}
