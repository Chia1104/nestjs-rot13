import { Module } from '@nestjs/common';
import { Rot13Service } from './services';
import { Rot13Controller } from './controllers';
import { Rot13Repository } from './repositories';

@Module({
  providers: [Rot13Service, Rot13Repository],
  controllers: [Rot13Controller]
})
export class Rot13Module {}
