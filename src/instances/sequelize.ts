// not import * as Sequelize from 'sequelize' <--This is wrong doesn't work
import {Sequelize} from 'sequelize';

const db = 'expressapp'
const username = 'mysql'
const password = 'root'


export const sequelize = new Sequelize(db, username, password,{
    dialect:"mysql",
    port:3306,
});


try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }