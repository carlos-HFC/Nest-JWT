import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { AuthModule } from './auth/auth.module';
import { TaskModule } from './tasks/task.module';
import { UserModule } from './users/user.module';

@Module({
   imports: [
      ConfigModule.forRoot(),
      SequelizeModule.forRoot({
         dialect: "mysql",
         host: process.env.DB_HOST,
         port: 3306,
         database: process.env.DB_NAME,
         username: process.env.DB_USER,
         password: process.env.DB_PASS,
         autoLoadModels: true,
         synchronize: true
      }),
      UserModule,
      TaskModule,
      AuthModule
   ],
   controllers: [],
   providers: [],
})
export class AppModule { }
