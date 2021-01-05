import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Users extends Model<Users> {
   @Column({
      type: DataType.STRING,
      allowNull: false
   })
   name: string

   @Column({
      type: DataType.STRING,
      allowNull: false,
      unique: true
   })
   email: string

   @Column({
      type: DataType.STRING,
      allowNull: false
   })
   password: string
}