import { Length, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class Rto13Input {
  @ApiProperty()
  @IsString()
  @Length(1, 25)
  readonly rto13_string: string;
}
