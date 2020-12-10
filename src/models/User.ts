import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import {sequelize} from '../instances/sequelize'
import * as bcrypt from 'bcryptjs';
import { flattenDiagnosticMessageText } from 'typescript';

export const User = sequelize.define('User',{
    id:{primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER},
    
    email:{
        unique:true,
        type:DataTypes.STRING,
        allowNull:false
    },
    
    password:DataTypes.STRING,
    
},{
    tableName: 'User'
 })

export async function encrypPassword (password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

export async function validatePassword(reqpassword: string,userpwd:string): Promise<boolean> {

    return await bcrypt.compare(reqpassword, userpwd);
};
