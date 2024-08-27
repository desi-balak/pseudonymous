import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  const BASE_PATH = '/api/v1';
  app.setGlobalPrefix(BASE_PATH, {
    // exclude: pathsToExclude,
  });
  app.enableCors({
    origin: true,
    credentials: true,
  });
  await app.listen(4000);
}
bootstrap();
