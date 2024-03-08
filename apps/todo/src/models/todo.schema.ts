import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class TodoDocument extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  status: string;

  @Prop()
  description: string;

  @Prop()
  timestamp: Date;
}

export const TodoSchema = SchemaFactory.createForClass(TodoDocument);
