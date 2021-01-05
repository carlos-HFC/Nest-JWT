import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import { Tasks } from "./task.model";

@Injectable()
export class TaskService {
   constructor(
      @InjectModel(Tasks)
      private readonly taskModel: typeof Tasks
   ) { }

   async getAll() {
      return await this.taskModel.findAll()
   }

   async getById(id: number) {
      return await this.taskModel.findByPk(id)
   }

   async create(body: Tasks) {
      return await this.taskModel.create(body)
   }

   async update(id: number, body: Tasks) {
      const task = await this.getById(id)

      if (!task) throw new HttpException('Tarefa não encontrada', 404)

      await task.update(body)
   }

   async delete(id: number) {
      const task = await this.getById(id)

      if (!task) throw new HttpException('Tarefa não encontrada', 404)

      await task.destroy()
   }
}