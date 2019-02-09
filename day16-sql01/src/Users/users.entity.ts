'use strict';
import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { IDefineOptions } from 'sequelize-typescript/lib/interfaces/IDefineOptions';

const tableOptions: IDefineOptions = {
  timestamps: false,
  tableName: 'User'
};

@Table(tableOptions)
export class Users extends Model<Users> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'ID'
  })
  public ID: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: true,
    comment: '姓名',
    field: 'Name'
  })
  public Name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    comment: '年纪',
    field: 'Age'
  })
  public Age: number;
}