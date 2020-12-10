import {Request,Response,NextFunction} from 'express';
import jwt from 'jsonwebtoken';

export const TokenValidation=(req:Request,res:Response,next:NextFunction)=>{
    const token=req.header('auth-token');
    
    if(!token) return res.status(401).json('No you can not go in!' );
    const PL=jwt.verify(token,process.env.TOKEN_SECRET || 'test');
    console.log('PL--------->',PL);
    next();
};