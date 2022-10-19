import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateAlarmDto } from './dto/CreateAlarm.dto';
import { CreateAlarmResponseDto } from './dto/CreateAlarmResponse.dto';

@Controller('alarm')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createAlarm(
    @Body() alarm: CreateAlarmDto,
  ): Promise<CreateAlarmResponseDto> {
    return await this.appService.createAlarm(alarm);
  }
}
