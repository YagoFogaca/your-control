import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user.repository';

@Injectable()
export class Find {
  constructor(private readonly userRepository: UserRepository) {}

  async execute() {
    return await this.userRepository.find();
  }
}
