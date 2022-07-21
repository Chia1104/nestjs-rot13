import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.NODE_ENV === 'production' ? 8080 : 3001);
}
bootstrap().then(() =>
  console.log(
    `Server is running on port ${
      process.env.NODE_ENV === 'production' ? 8080 : 3001
    }`,
  ),
);
