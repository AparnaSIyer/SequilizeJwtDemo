import {Request,Response,NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode'; 

export const TokenValidation=(req:Request,res:Response,next:NextFunction)=>{
    const token=req.header('auth-token');
    
    if (!token) {
        return res.status(403).json({
          error: true,
          message: "Token is required."
        });
      }

    let jwtPayload;
    try{
      
        jwtPayload = <any>jwt.verify(token, process.env.TOKEN_SECRET || 'test');
        res.locals.jwtPayload = jwtPayload;
    }
    catch(ex){
      console.log(ex);
      res.status(400).json("Auth failed");
    }
    
  //   jwt.verify(token,process.env.TOKEN_SECRET || 'test',(err,user)=>{
  //     console.log('user',user)
  //     if (err) return res.status(500).send({ error: true, message: 'Failed to authenticate token.' });
  //     next();  
  // });

  next();

};


