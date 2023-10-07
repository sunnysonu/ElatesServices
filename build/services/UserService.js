"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bluebird_1 = require("bluebird");
const model_factory_1 = __importDefault(require("../model-factory"));
const app_services_1 = require("../app-services");
const types_1 = require("../types");
const config_json_1 = __importDefault(require("../config.json"));
class UserService {
    constructor() {
        this.modelInstance = model_factory_1.default.user;
    }
    getAuthToken(email, password) {
        const jwtServiceInst = new app_services_1.JWTService();
        if (!email || !password) {
            console.error(`Invalid Credentails`);
            return bluebird_1.Promise.reject(`Invalid Credentails`);
        }
        return this.modelInstance.getUserByCredentails(email, password)
            .then(user => {
            if (!user || !user._id) {
                console.error(`No User Record exists with given credentails`);
                return bluebird_1.Promise.reject(`Invalid Credentails`);
            }
            const jwtData = {
                userId: user._id,
            };
            const token = jwtServiceInst.generateNewToken(jwtData, config_json_1.default.authorization.privateKey, {});
            return {
                userId: user._id,
                token: token,
            };
        });
    }
    createAdmin(command) {
        const user = {
            username: command.username,
            firstname: command.firstname,
            lastname: command.lastname,
            email: command.email,
            password: command.password,
            role: types_1.Role.Admin,
        };
        return this.modelInstance.createUser(user);
    }
}
exports.default = UserService;
