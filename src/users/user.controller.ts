import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

import { Users } from "./user.model";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
   constructor(
      private userService: UserService
   ) { }

   @Get()
   async index() {
      return await this.userService.getAll()
   }

   @Get(':id')
   async showById(@Param('id') id: number) {
      return await this.userService.getById(id)
   }

   @Post()
   async create(@Body() body: Users) {
      return await this.userService.create(body)
   }

   @Put(':id')
   async update(@Param('id') id: number, @Body() body: Users) {
      return await this.userService.update(id, body)
   }

   @Delete(':id')
   async delete(@Param('id') id: number) {
      return await this.userService.delete(id)
   }
}