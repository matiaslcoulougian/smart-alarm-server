import {
  IsByteLength,
  IsDateString,
  IsEmpty,
  IsNotEmpty,
} from 'class-validator';

export class CreateAlarmDto {
  @IsNotEmpty()
  @IsDateString()
  time: Date;

  @IsNotEmpty()
  @IsByteLength(1, 50)
  name: string;

  @IsNotEmpty()
  days: object;

  @IsNotEmpty()
  deviceId: string;
}
