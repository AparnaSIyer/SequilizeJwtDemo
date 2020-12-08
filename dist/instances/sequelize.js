"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
// not import * as Sequelize from 'sequelize' <--This is wrong doesn't work
const sequelize_1 = require("sequelize");
const db = 'expressapp';
const username = 'mysql';
const password = 'root';
exports.sequelize = new sequelize_1.Sequelize(db, username, password, {
    dialect: "mysql",
    port: 3306,
});
try {
    exports.sequelize.authenticate();
    console.log('Connection has been established successfully.');
}
catch (error) {
    console.error('Unable to connect to the database:', error);
}
//# sourceMappingURL=sequelize.js.map