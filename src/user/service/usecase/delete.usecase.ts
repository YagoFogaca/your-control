import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user.repository';

@Injectable()
export class UserDeleteUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string): Promise<boolean> {
    const userDelete = await this.userRepository.findById(id);
    if (!userDelete) {
      throw new Error('Usuário não foi encontrado');
    }

    const userDeleted = await this.userRepository.delete(id);
    if (!userDeleted) {
      throw new Error('Usuário não foi deletado');
    }

    return true;
  }
}
