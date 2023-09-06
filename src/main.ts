import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  const port = process.env.PORT || 4002;

  app.setGlobalPrefix('v1');
  app.enableCors();

  await app.listen(port, () => {
    Logger.debug(`listening on port ${port}`);
  });
}
bootstrap();
