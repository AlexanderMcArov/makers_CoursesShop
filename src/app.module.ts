import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb+srv://todolist:s1a2s3h4a5@cluster0.q0q0d.gcp.mongodb.net/CoursesBase?retryWrites=true&w=majority'), AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
