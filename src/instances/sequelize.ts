// not import * as Sequelize from 'sequelize' <--This is wrong doesn't work
import {Sequelize} from 'sequelize';

const db = 'test'
const username = 'root'
const password = ''


export const sequelize = new Sequelize(db, username, password,{
    dialect:"mysql",
    port:3307,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
});

try {
    sequelize.authenticate().then(result=> console.log("Connection established"));
    sequelize.sync();
   
  } catch (error) {
    console.error('Unable to connect to the database:');
  }