import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UserDto } from '../dto/user.dto';
import { PartialUserDto } from '../dto/user.partial.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user: UserDto): Promise<UserDto> {
    return await this.prismaService.user.create({ data: user });
  }

  async email(email: string): Promise<UserDto> {
    return await this.prismaService.user.findUnique({
      where: { email: email },
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

  async findById(id: string): Promise<UserDto> {
    return await this.prismaService.user.findUnique({
      where: { id: id },
    });
  }

  async find(): Promise<UserDto[]> {
    return await this.prismaService.user.findMany();
  }
}
