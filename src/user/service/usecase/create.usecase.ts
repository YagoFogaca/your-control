import { randomUUID } from 'crypto';
import { UserRepository } from '../user.repository';
import { UserCreateDto } from 'src/user/dto/user.create.dto';
import { UserDto } from 'src/user/dto/user.dto';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserCreateUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(user: UserCreateDto): Promise<UserDto> {
    const verifyEmail = await this.userRepository.email(user.email);
    if (verifyEmail) {
      throw new Error('Email já existe');
    }

    if (user.password.length < 8) {
      throw new Error('Senha inválida');
    }

    const userCraete = { ...user, id: randomUUID() };
    userCraete.password = await bcrypt.hash(user.password, 10);

    const userCreated = await this.userRepository.create(userCraete);
    if (!userCreated) {
      throw new Error('Ocorreu um erro inesperado ao criar o usuário');
    }

    return userCreated;
  }
}
