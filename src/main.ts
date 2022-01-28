import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
// import { AppModule } from './basic-app/app.module';
import { MessagesModule } from './messages-app/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
