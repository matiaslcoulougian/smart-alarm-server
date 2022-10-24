import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { AppService } from './app.service';
import { CreateAlarmDto } from './dto/CreateAlarm.dto';
import { CreateAlarmResponseDto } from './dto/CreateAlarmResponse.dto';
import { Alarm } from "./entity/alarm.entity";

@Controller('alarm')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createAlarm(
    @Body() alarm: CreateAlarmDto,
  ): Promise<CreateAlarmResponseDto> {
    return await this.appService.createAlarm(alarm);
  }

  @Get()
  async getAllAlarms(): Promise<Alarm[]> {
    return await this.appService.getAllAlarms();
  }

  @Delete('/:id')
  async deleteAlarm(@Param("id") id) {
    await this.appService.deleteAlarm(id)
  }
}

