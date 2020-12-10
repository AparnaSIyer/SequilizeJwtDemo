"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = exports.signin = exports.signup = void 0;
const User_1 = require("../models/User");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new User_1.User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    console.log('---->', user.getDataValue('password'));
    let pwdEnc = yield User_1.encrypPassword(req.body.password);
    user.setDataValue('password', pwdEnc);
    const saveduser1 = yield user.save();
    res.json(saveduser1);
});
exports.signup = signup;
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.User.findOne({ where: { email: req.body.email } });
    if (!user)
        return res.status(404).json('Email or password is wrong');
    const correctPassword = yield User_1.validatePassword(req.body.password, user.getDataValue('password'));
    if (!correctPassword)
        return res.status(404).json('Password is wrong');
    const token = jsonwebtoken_1.default.sign({ id: user.getDataValue('Id'), email: user.getDataValue('email') }, process.env.TOKEN_SECRET || 'test', {
        expiresIn: '1h'
    });
    return res.header('auth-token', token).json(user);
    ;
});
exports.signin = signin;
const profile = (req, res) => {
    return res.send('Welcome aboard!');
};
exports.profile = profile;
//# sourceMappingURL=auth.controller.js.map