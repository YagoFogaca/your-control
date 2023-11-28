import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from './service/user.service';
import { UserCreateUseCase } from './service/usecase/create.usecase';
import { UserRepository } from './service/user.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UserController],
  imports: [PrismaModule],
  providers: [UserService, UserCreateUseCase, UserRepository, PrismaService],
})
export class UserModule {}
