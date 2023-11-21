import { Injectable, OnModuleInit, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  // Verificar se é necessario
  // async enableShutdownHooks(app: INestApplication) {
  //   // this.$on('beforeExit', async () => {
  //   //   await app.close();
  //   // });
  //   this.$on('teste', () => {});
  // }
}
