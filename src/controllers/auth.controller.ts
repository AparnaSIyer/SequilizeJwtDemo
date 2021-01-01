import {Request,Response} from 'express'
import {User,encrypPassword,validatePassword}from '../models/User';
import jwt from 'jsonwebtoken';

export const signup=async (req:Request,res:Response)=>{
    const user =new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    });
    
    let pwdEnc:any=await encrypPassword(req.body.password);
    user.setDataValue('password',pwdEnc);
    const saveduser1= await user.save();
        
    res.json(saveduser1);
};

export const signin=async (req:Request,res:Response)=>{
    

    const user= await User.findOne({where:{email:req.body.user.email}})
    
    if(!user) return res.status(404).json('Email or password is wrong');
    
    const correctPassword= await validatePassword(req.body.user.password,user.getDataValue('password'));

    if(!correctPassword) return res.status(404).json('Password is wrong');
    const token:string= jwt.sign({id:user.getDataValue('Id'),email:user.getDataValue('email')},process.env.TOKEN_SECRET || 'test',{
        expiresIn: '1h'
    });


    return res.header('auth-token',token).json(user); ;
 
};

export const profile=(req:Request,res:Response)=>{
    console.log("profile")
    let msg="'Welcome aboard!'";
    return res.status(200).json({msg});
};

export const test=(req:Request,res:Response)=>{
    
    const msg="Okay yu have got here";
    
    return res.send(msg);
}