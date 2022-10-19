import { IsByteLength, IsNotEmpty } from 'class-validator';

export class CreateAlarmResponseDto {
  @IsNotEmpty()
  time: Date;

  @IsNotEmpty()
  @IsByteLength(1, 50)
  name: string;

  @IsNotEmpty()
  days: object;

  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  createdAt: Date;

  @IsNotEmpty()
  deviceId: string;
}
