"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const config_json_1 = __importDefault(require("../config.json"));
/*
 * Author: Addapa Sunny
 * Instantiates the Express app.
 */
const initiateExpressApp = () => {
    const app = (0, express_1.default)();
    try {
        app.use((0, cors_1.default)(config_json_1.default.corsOptions));
        app.use(body_parser_1.default.json());
        app.use(body_parser_1.default.urlencoded({
            extended: true
        }));
    }
    catch (err) {
        console.error(`Error while Initiating Express App ${err}`);
    }
    console.log(`Successfully Initiated Express App`);
    return app;
};
exports.default = initiateExpressApp;
