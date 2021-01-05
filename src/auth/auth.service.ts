import { HttpException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { Users } from "src/users/user.model";
import { UserService } from "src/users/user.service";

@Injectable()
export class AuthService {
   constructor(
      private userService: UserService,
      private jwtService: JwtService,
   ) { }

   async validate(email: string, password: string) {
      const user = await this.userService.getByEmail(email)

      if (user && user.password === password) {
         return user
      }

      throw new HttpException("As credenciais estão incorretas", 401)
   }

   async login(user: Users) {
      const payload = { email: user.email, sub: user.id }
      return {
         access_token: this.jwtService.sign(payload)
      }
   }
}