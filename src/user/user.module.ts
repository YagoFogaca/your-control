import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from './service/user.service';
import { UserCreateUseCase } from './service/usecase/create.usecase';
import { UserRepository } from './service/user.repository';
import { PrismaModule } from 'src/prisma/prisma.module';
import { Find } from './service/usecase/find.usecase';
import { UserUpdateUseCase } from './service/usecase/update.usecase';

@Module({
  controllers: [UserController],
  imports: [PrismaModule],
  providers: [
    UserService,
    Find,
    UserUpdateUseCase,
    UserCreateUseCase,
    UserRepository,
    PrismaService,
  ],
})
export class UserModule {}
