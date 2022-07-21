import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('ROT13 API')
    .setDescription('rot13 API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/documentation', app, document);
  await app.listen(process.env.NODE_ENV === 'production' ? 8080 : 3001);
}
bootstrap().then(() =>
  console.log(
    `Server is running on port ${
      process.env.NODE_ENV === 'production' ? 8080 : 3001
    }`,
  ),
);
