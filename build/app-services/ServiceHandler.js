"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryServiceHandler = exports.CommandServiceHandler = void 0;
const bluebird_1 = __importDefault(require("bluebird"));
const helpers_1 = require("../helpers");
const CommandServiceHandler = (command, req, res, commandName, callback) => {
    const requestBody = req.body;
    if (!requestBody) {
        (0, helpers_1.sendResponse)(res, 403, `Missing Request Body`);
    }
    const validateCommandP = command.validateAsync(requestBody);
    return bluebird_1.default.resolve(validateCommandP)
        .then(() => {
        return callback
            .then(() => {
            console.log(`Command: ${commandName} Executed Successfully`);
            (0, helpers_1.sendResponse)(res, 200, `Success`);
        })
            .catch((err) => {
            console.error(`Error While Executing Command: ${command.label} ${err}`);
            (0, helpers_1.sendResponse)(res, 500, err);
        });
    })
        .catch((err) => {
        console.error(`Invalid Payload : ${err}`);
        (0, helpers_1.sendResponse)(res, 403, err);
    });
};
exports.CommandServiceHandler = CommandServiceHandler;
const QueryServiceHandler = (req, res, callback) => {
    return callback
        .then((data) => {
        console.log(`Query Executed successfully`);
        (0, helpers_1.sendResponse)(res, 200, data);
    })
        .catch((err) => {
        console.error(`Error while executing the Query ${err}`);
        (0, helpers_1.sendResponse)(res, 400, err);
    });
};
exports.QueryServiceHandler = QueryServiceHandler;
