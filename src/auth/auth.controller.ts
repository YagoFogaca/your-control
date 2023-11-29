import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { IUserLogin } from 'src/utils/interfaces/user.interfaces';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/')
  async login(@Body() user: IUserLogin) {
    try {
      const data = await this.authService.login(user);
      return {
        message: 'Login realizado com sucesso',
        data: data,
        statusCode: 200,
      };
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException(error.message);
    }
  }
}
