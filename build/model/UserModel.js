"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseModel_1 = __importDefault(require("../base-model/BaseModel"));
const bluebird_1 = require("bluebird");
class UserModel extends BaseModel_1.default {
    constructor(modelName, model) {
        super(modelName, model);
    }
    getUserById(userId) {
        if (!userId) {
            return bluebird_1.Promise.reject(`UserId should be valid value userId: ${userId}`);
        }
        const query = {
            _id: userId
        };
        return this.findOne(query, {});
    }
    getUserByCredentails(email, password) {
        if (!email || !password) {
            return bluebird_1.Promise.reject(`Invalid Credentails`);
        }
        const query = {
            email, password
        };
        return this.findOne(query, {})
            .then((data) => {
            return data;
        });
    }
    createUser(user) {
        if (!user)
            return bluebird_1.Promise.reject(`Invalid user data`);
        return this.create(user);
    }
}
exports.default = UserModel;
