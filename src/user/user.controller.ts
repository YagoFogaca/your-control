import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Res,
} from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserCreateDto } from './dto/user.create.dto';
import { PartialUserDto } from './dto/user.partial.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
  async create(@Body() user: UserCreateDto) {
    try {
      const userCreated = await this.userService.create(user);
      return {
        message: 'Usuário criado com sucesso',
        data: userCreated,
        statusCode: 201,
      };
    } catch (error) {
      console.log(error);
      throw new BadRequestException('dsfsdfsd', error);
      // throw new BadRequestException({
      //   message: 'Usuários não encontrados',
      //   error: 'O servidor não encontrou o dado solicitado',
      //   statusCode: 400,
      // });
    }
  }

  @Patch('/')
  async update(@Body() user: PartialUserDto) {
    try {
      const userUpdate = await this.userService.update(user);
      return {
        message: 'Usuário atualizado com sucesso',
        data: userUpdate,
        statusCode: 200,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
