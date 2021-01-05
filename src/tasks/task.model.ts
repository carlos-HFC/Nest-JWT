import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Tasks extends Model<Tasks> {
   @Column({
      type: DataType.STRING,
      allowNull: false
   })
   description: string

   @Column({
      type: DataType.BOOLEAN,
      allowNull: false,
   })
   completed: boolean
}