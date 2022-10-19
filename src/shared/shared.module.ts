import { Module } from '@nestjs/common';
import { DatabaseService } from './service';
import { PrismaService } from './service/prisma/prisma.service';

const databaseServiceProvider = {
  provide: DatabaseService,
  useClass: PrismaService,
};

@Module({
  exports: [databaseServiceProvider],
  providers: [databaseServiceProvider],
})
export class SharedModule {}
