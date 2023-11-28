import { PartialUserDto } from 'src/user/dto/user.partial.dto';
import { UserRepository } from '../user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserUpdateUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(user: PartialUserDto, id: string) {
    const userUpdate = await this.userRepository.findById(id);
    if (!userUpdate) {
      throw new Error('Usuário não foi encontrado');
    }

    if (user.email && userUpdate.email !== user.email) {
      const verifyEmail = await this.userRepository.email(user.email);
      if (verifyEmail) {
        throw new Error('Email inválido');
      }
    }

    if (user.name && user.name !== userUpdate.name) {
      if (user.name.length < 3) {
        throw new Error('Name inválido');
      }
    }

    const userUpdated = await this.userRepository.update(
      { email: user.email, name: user.name, id: id },
      id,
    );
    if (!userUpdated) {
      throw new Error('Usuário não foi atualizado');
    }

    return userUpdated;
  }
}
