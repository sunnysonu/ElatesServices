"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = __importDefault(require("../services"));
const ServiceHandler_1 = require("../app-services/ServiceHandler");
const userCommandsValidator_1 = require("../commands/user/userCommandsValidator");
const bluebird_1 = require("bluebird");
const config_json_1 = __importDefault(require("../config.json"));
const getAuthToken = (req, res) => {
    const serviceInstance = services_1.default.getUserService();
    const { email, password } = req.headers;
    const serviceP = bluebird_1.Promise.resolve(serviceInstance.getAuthToken(email, password));
    (0, ServiceHandler_1.QueryServiceHandler)(req, res, serviceP);
};
const createAdminUser = (req, res) => {
    const serviceInstance = services_1.default.getUserService();
    const serviceP = bluebird_1.Promise.resolve(serviceInstance.createAdmin(req.body));
    (0, ServiceHandler_1.CommandServiceHandler)(userCommandsValidator_1.createAdminCommandValidator, req, res, 'CreateAdminCommand', serviceP);
};
const userController = (app) => {
    app.get(`${config_json_1.default.api.authtoken}`, (req, res) => getAuthToken(req, res));
    app.post(`${config_json_1.default.api.createadmin}`, (req, res) => createAdminUser(req, res));
};
exports.default = userController;
