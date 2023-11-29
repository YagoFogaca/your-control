import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/user/service/user.repository';
import {
  IResUserLogin,
  IUserLogin,
} from 'src/utils/interfaces/user.interfaces';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async execute({ email, password }: IUserLogin): Promise<IResUserLogin> {
    const user = await this.userRepository.email(email);
    if (!user) {
      throw new Error('Email ou senha inválidos');
    }

    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      throw new Error('Email ou senha inválidos');
    }

    const jwt = await this.jwtService.signAsync({
      email: user.email,
      id: user.id,
      name: user.name,
    });

    return {
      user: {
        email: user.email,
        id: user.id,
        name: user.name,
      },
      jwt: jwt,
    };
  }
}
