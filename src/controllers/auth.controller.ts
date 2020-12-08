import { isExpressionStatement } from "typescript";
import {Request,Response} from 'express'
import User , { userschema} from '../models/User';
import jwt from 'jsonwebtoken';

export const signup=async (req:Request,res:Response)=>{
    const user =new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    });
    user.password = await user.encryptPassword(user.password);
    const saveduser1= await user.save();
        
    res.json(saveduser1);
};

export const signin=async (req:Request,res:Response)=>{
    
    const user= await User.findOne({email:req.body.email});
    if(!user) return res.status(404).json('Email or password is wrong');
    
    const correctPassword= await user.validatePassword(req.body.password);

    if(!correctPassword) return res.status(404).json('Password is wrong');
    
    const token:string= jwt.sign({_id:user._id},process.env.TOKEN_SECRET || 'test',{
        expiresIn: '1h'
    });

    return res.header('auth-token',token).json(user); ;
 
};

export const profile=(req:Request,res:Response)=>{
    
    res.send('profile')

};

