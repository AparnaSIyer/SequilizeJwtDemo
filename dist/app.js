"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
// app variable is of type express' Application
const app = express_1.default();
//configurations
app.set('port', 5000);
app.use(express_1.default.json());
app.use('/api/auth', auth_route_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map