"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dbUri = 'mongodb+srv://aparna_31:test123@cluster0.1d44q.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose_1.default
    .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => { console.log('Database connected'); })
    .catch((err) => console.log(err));
//# sourceMappingURL=database.js.map