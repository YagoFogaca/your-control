import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UserDto } from '../dto/user.dto';
import { UserLogin } from 'src/utils/interfaces/user.interfaces';
import { PartialUserDto } from '../dto/user.partial.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user: UserDto): Promise<UserDto> {
    return await this.prismaService.user.create({ data: user });
  }

  async login(user: UserLogin): Promise<UserDto> {
    return await this.prismaService.user.findUniqueOrThrow({
      where: { email: user.email },
    });
  }

  async update(user: PartialUserDto, id: string): Promise<UserDto> {
    return await this.prismaService.user.update({
      where: { id: id },
      data: user,
    });
  }

  async delete(id: string): Promise<UserDto> {
    return await this.prismaService.user.delete({ where: { id: id } });
  }
}
