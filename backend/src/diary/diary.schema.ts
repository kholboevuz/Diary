import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DiaryDocument = HydratedDocument<Diary>;

@Schema()
export class Diary {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  createdAdd: string;
  @Prop()
  photo: string;
}

export const DiarySchema = SchemaFactory.createForClass(Diary);
