import { PartialType } from '@nestjs/swagger';
import { UserDto } from './user.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class PartialUserDto extends PartialType(UserDto) {
  @IsString()
  @IsNotEmpty()
  id: string;
}
