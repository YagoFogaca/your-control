import { Injectable } from '@nestjs/common';
import { UserCreateUseCase } from './usecase/create.usecase';
import { UserCreateDto } from '../dto/user.create.dto';
import { UserDto } from '../dto/user.dto';
import { PartialUserDto } from '../dto/user.partial.dto';
import { UserUpdateUseCase } from './usecase/update.usecase';
import { Find } from './usecase/find.usecase';

@Injectable()
export class UserService {
  constructor(
    private readonly userCreateUseCase: UserCreateUseCase,
    private readonly userUpdateUseCase: UserUpdateUseCase,
    private readonly find: Find,
  ) {}

  async create(user: UserCreateDto): Promise<UserDto> {
    return await this.userCreateUseCase.execute(user);
  }

  async update(user: PartialUserDto): Promise<UserDto> {
    return await this.userUpdateUseCase.execute(user, user.id);
  }

  async findAll(): Promise<UserDto[]> {
    return await this.find.execute();
  }
}
