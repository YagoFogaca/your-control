import { Injectable } from '@nestjs/common';
import { LoginUseCase } from './usecase/login.usecase';
import {
  IResUserLogin,
  IUserLogin,
} from 'src/utils/interfaces/user.interfaces';

@Injectable()
export class AuthService {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  async login(user: IUserLogin): Promise<IResUserLogin> {
    return await this.loginUseCase.execute(user);
  }
}
