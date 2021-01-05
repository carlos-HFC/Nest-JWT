import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import { Users } from "./user.model";

@Injectable()
export class UserService {
   constructor(
      @InjectModel(Users)
      private readonly userModel: typeof Users
   ) { }

   async getAll() {
      return await this.userModel.findAll()
   }

   async getById(id: number) {
      return await this.userModel.findByPk(id)
   }

   async getByEmail(email: string) {
      return await this.userModel.findOne({ where: { email } })
   }

   async create(body: Users) {
      return await this.userModel.create(body)
   }

   async update(id: number, body: Users) {
      const user = await this.getById(id)

      if (!user) throw new HttpException('Usuário não encontrado', 404)

      await user.update(body)
   }

   async delete(id: number) {
      const user = await this.getById(id)

      if (!user) throw new HttpException('Usuário não encontrado', 404)

      await user.destroy()
   }
}