import { Alarm } from './entity/alarm.entity';
import { BaseRepository } from './shared/repository';
import { Injectable } from '@nestjs/common';
import { DatabaseService } from './shared/service';

@Injectable()
export class AppRepository extends BaseRepository<Alarm> {
  constructor(db: DatabaseService) {
    super(db, 'classicAlarm');
  }
}
