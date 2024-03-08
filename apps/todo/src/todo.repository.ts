import { Injectable, Logger } from '@nestjs/common';
import { TodoDocument } from './models/todo.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from '@app/common';

@Injectable()
export class TodoRepository extends AbstractRepository<TodoDocument> {
  protected readonly logger = new Logger(TodoRepository.name);

  constructor(@InjectModel(TodoDocument.name) todoModel: Model<TodoDocument>) {
    super(todoModel);
  }
}
