"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_json_1 = __importDefault(require("../config.json"));
3;
const startServer = (app) => {
    try {
        app.listen(config_json_1.default.app.port, () => {
            console.log(`Elates Server started running on port : ${config_json_1.default.app.port}`);
        });
    }
    catch (err) {
        console.error(`Error while running the Application on port : ${config_json_1.default.app.port} ${err}`);
    }
};
exports.default = startServer;
