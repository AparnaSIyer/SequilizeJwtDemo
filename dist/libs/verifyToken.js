"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenValidation = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const TokenValidation = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(403).json({
            error: true,
            message: "Token is required."
        });
    }
    let jwtPayload;
    try {
        jwtPayload = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET || 'test');
        res.locals.jwtPayload = jwtPayload;
    }
    catch (ex) {
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
exports.TokenValidation = TokenValidation;
