import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  NotFoundException,
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
      console.log(error.message);
      throw new BadRequestException(error.message);
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
      console.log(error.message);
      throw new BadRequestException(error.message);
    }
  }

  @Get('/')
  async find() {
    try {
      const userUpdate = await this.userService.findAll();
      return {
        message: 'Usuários encontrados com sucesso',
        data: userUpdate,
        statusCode: 200,
      };
    } catch (error) {
      console.log(error.message);
      throw new NotFoundException(error.message);
    }
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    try {
      await this.userService.delete(id);
      return {
        message: 'Usuário deletado com sucesso',
        statusCode: 200,
      };
    } catch (error) {
      console.log(error.message);
      throw new NotFoundException(error.message);
    }
  }
}
