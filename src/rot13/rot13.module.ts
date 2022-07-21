import { Module } from '@nestjs/common';
import { Rot13Service } from './services';
import { Rot13Controller } from './controllers';

@Module({
  providers: [Rot13Service],
  controllers: [Rot13Controller]
})
export class Rot13Module {}
