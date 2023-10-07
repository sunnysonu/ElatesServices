"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
class JWTService {
    generateNewToken(data, privateKey, options) {
        try {
            const token = jwt.sign(data, privateKey);
            return token;
        }
        catch (err) {
            console.error(`Error while generating the token`);
            throw new Error(`Error while generating the token`);
        }
    }
    isTokenValid(data, privateKey, token) {
        try {
            jwt.verify(token, privateKey, (err, decoded) => {
                if (decoded.userId !== data.userId) {
                    throw Error(`Unauthorized`);
                }
            });
            return true;
        }
        catch (err) {
            console.error(`Invalid token ${err}`);
            return false;
        }
    }
}
exports.default = JWTService;
