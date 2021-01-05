import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { UserController } from "./user.controller";
import { Users } from "./user.model";
import { UserService } from "./user.service";

@Module({
   imports: [
      SequelizeModule.forFeature([Users])
   ],
   controllers: [UserController],
   providers: [UserService],
   exports: [UserService]
})

export class UserModule { }