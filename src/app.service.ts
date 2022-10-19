import { Inject, Injectable } from '@nestjs/common';
import { CreateAlarmDto } from './dto/CreateAlarm.dto';
import { CreateAlarmResponseDto } from './dto/CreateAlarmResponse.dto';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
  constructor(@Inject(AppRepository) private readonly app: AppRepository) {}
  async createAlarm(alarm: CreateAlarmDto): Promise<CreateAlarmResponseDto> {
    alarm.time = new Date(alarm.time);
    alarm.isActive = true;
    alarm.createdAt = new Date();
    return this.app.create(alarm);
  }
}
