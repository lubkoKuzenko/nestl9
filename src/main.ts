import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
// import { AppModule } from './basic-app/app.module';
// import { MessagesModule } from './messages-app/messages.module';
import { MyCvModule } from './mycv-app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(MyCvModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
