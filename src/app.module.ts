import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { Rot13Module } from './rot13/rot13.module';
import { PreAuthMiddleware } from './middlewares/pre-auth';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [Rot13Module, ConfigModule.forRoot()],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PreAuthMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
