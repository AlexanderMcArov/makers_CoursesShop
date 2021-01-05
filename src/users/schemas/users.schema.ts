import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type UsersDocument = Users & Document

@Schema()
export class Users{
    @Prop()
    username: string

    @Prop()    
    email: string

    @Prop()
    password: string

    @Prop()
    date_created: string

    @Prop()
    buy_list: []

    @Prop()
    role: string
}

export const UserSchema = SchemaFactory.createForClass(Users)