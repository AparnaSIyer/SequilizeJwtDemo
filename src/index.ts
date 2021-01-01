import app from './app';
import mongoose from 'mongoose';
import './instances/sequelize';
import dotenv from 'dotenv';


dotenv.config(); 

function main(){
    
    app.listen(app.get('port'),()=>console.log('Server is running',app.get('port')))
}

main();