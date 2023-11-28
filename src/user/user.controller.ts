import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Res,
} from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserCreateDto } from './dto/user.create.dto';

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
        statusCode: 200,
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
}
