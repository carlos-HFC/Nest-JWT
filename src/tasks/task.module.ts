import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { TaskController } from "./task.controller";
import { Tasks } from "./task.model";
import { TaskService } from "./task.service";

@Module({
   imports: [
      SequelizeModule.forFeature([Tasks])
   ],
   controllers: [TaskController],
   providers: [TaskService]
})

export class TaskModule { }