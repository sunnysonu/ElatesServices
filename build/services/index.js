"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("./UserService"));
class ServiceFactory {
    constructor() { }
    static getUserService() {
        if (!ServiceFactory.userServiceInstance)
            ServiceFactory.userServiceInstance = new UserService_1.default();
        return ServiceFactory.userServiceInstance;
    }
}
ServiceFactory.userServiceInstance = null;
exports.default = ServiceFactory;
