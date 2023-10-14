import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';
import * as cors from 'cors';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.enableShutdownHooks();

  const configService = app.get(ConfigService);
  app.use(
    cors({
      origin: 'http://localhost:3001',
      credentials: true,
    }),
  );
  await app.listen(configService.get('port'));
}
bootstrap();
