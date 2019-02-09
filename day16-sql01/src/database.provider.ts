import { Sequelize } from 'sequelize-typescript';
import { Users } from './Users/users.entity';

export const databaseProvider = [
  {
    provide: 'SequelizeInstance',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'day30test',
        database: ''
      });
      sequelize.addModels([Users]);
      await sequelize.sync();
      return sequelize;
    }
  }
];