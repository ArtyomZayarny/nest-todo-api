import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  create(createTodoDto: CreateTodoDto) {
    return this.todoRepository.create({
      ...createTodoDto,
      timestamp: new Date(),
    });
  }

  findAll() {
    return this.todoRepository.find({});
  }

  findOne(_id: string) {
    return this.todoRepository.findOne({ _id });
  }

  update(_id: string, updateTodoDto: UpdateTodoDto) {
    return this.todoRepository.findOneAndUpdate(
      { _id },
      { $set: updateTodoDto },
    );
  }

  remove(_id: string) {
    return this.todoRepository.findOneAndDelete({ _id });
  }
}
