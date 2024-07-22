import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { RolesTypes } from '../entities/user.entity';

@Schema()
export class Users {
  @Prop()
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true,enum:RolesTypes, default: 'user' })
  role: RolesTypes;

  @Prop({ default: Date.now() })
  createdAt: Date;

  @Prop({ default: Date.now() })
  updatedAt: Date;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
export type UsersDocument = Users & Document;
export type UsersModel = Model<Users>;
