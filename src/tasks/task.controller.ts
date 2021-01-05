import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

import { Tasks } from "./task.model";
import { TaskService } from "./task.service";

@Controller('tasks')
export class TaskController {
   constructor(
      private taskService: TaskService
   ) { }

   @UseGuards(JwtAuthGuard)
   @Get()
   async index() {
      return await this.taskService.getAll()
   }

   @UseGuards(JwtAuthGuard)
   @Get(':id')
   async showById(@Param('id') id: number) {
      return await this.taskService.getById(id)
   }

   @UseGuards(JwtAuthGuard)
   @Post()
   async create(@Body() body: Tasks) {
      return await this.taskService.create(body)
   }

   @UseGuards(JwtAuthGuard)
   @Put(':id')
   async update(@Param('id') id: number, @Body() body: Tasks) {
      return await this.taskService.update(id, body)
   }

   @UseGuards(JwtAuthGuard)
   @Delete(':id')
   async delete(@Param('id') id: number) {
      return await this.taskService.delete(id)
   }
}