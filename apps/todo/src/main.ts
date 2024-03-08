import { NestFactory } from '@nestjs/core';
import { TodoModule } from './todo.module';

async function bootstrap() {
  const app = await NestFactory.create(TodoModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
