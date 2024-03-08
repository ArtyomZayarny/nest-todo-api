import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { DatabaseModule } from '@app/common';
import { TodoRepository } from './todo.repository';
import { TodoDocument, TodoSchema } from './models/todo.schema';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: TodoDocument.name, schema: TodoSchema },
    ]),
  ],
  controllers: [TodoController],
  providers: [TodoService, TodoRepository],
})
export class TodoModule {}
