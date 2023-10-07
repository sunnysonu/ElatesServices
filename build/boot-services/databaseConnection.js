"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_json_1 = __importDefault(require("../config.json"));
/*
 * Author: Addapa Sunny
 */
const establishDatabaseConnection = () => {
    try {
        console.log(`Connecting to Mongo DB on port : ${config_json_1.default.mongo.port}`);
        // Establising Mongo connection
        mongoose_1.default.connect(`${config_json_1.default.mongo.host}:${config_json_1.default.mongo.port}/${config_json_1.default.mongo.dbname}`);
        console.log(`Successfully connected to Mongo DB`);
    }
    catch (err) {
        console.error(`Error while Connecting to Mongo DB`);
    }
};
exports.default = establishDatabaseConnection;
