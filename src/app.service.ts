import { Inject, Injectable } from '@nestjs/common';
import { CreateAlarmDto } from './dto/CreateAlarm.dto';
import { CreateAlarmResponseDto } from './dto/CreateAlarmResponse.dto';
import { AppRepository } from './app.repository';
import { client } from "./main";
import {RecurrenceRule, scheduleJob, Range} from "node-schedule";
import { Alarm } from "./entity/alarm.entity";

@Injectable()
export class AppService {
    constructor(@Inject(AppRepository) private readonly app: AppRepository) {}
    async createAlarm(alarm: CreateAlarmDto): Promise<CreateAlarmResponseDto> {
        alarm.time = new Date(alarm.time);
        const createdAlarm = await this.app.create(alarm);
        // const rule = new RecurrenceRule();
        // rule.dayOfWeek = alarm.days;
        // rule.hour = createdAlarm.time.getHours();
        // rule.minute = createdAlarm.time.getMinutes();
        // const job = scheduleJob(rule, () => {
        //     client.publish("alarm", 'BEEP BEEP BEEP', { qos: 0, retain: false }, (error) => {
        //         if (error) {
        //             console.error(error)
        //         }
        //     })
        //     console.log("ALARM ACTIVATED")
        // });
        return createdAlarm;
    }

    async getAllAlarms(deviceId: string): Promise<Alarm[]> {
        return await this.app.findMany({
            where: {
                deviceId
            }
        });
    }

    async deleteAlarm(id: string) {
        return await this.app.delete(id);
    }
}
