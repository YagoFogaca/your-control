import { Injectable } from '@nestjs/common';
import { UserCreateUseCase } from './usecase/create.usecase';
import { UserCreateDto } from '../dto/user.create.dto';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userCreateUseCase: UserCreateUseCase) {}

  async create(user: UserCreateDto): Promise<UserDto> {
    return await this.userCreateUseCase.execute(user);
  }
}
