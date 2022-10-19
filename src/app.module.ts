import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRepository } from './app.repository';
import { DatabaseService } from './shared/service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AppRepository, DatabaseService],
})
export class AppModule {}
