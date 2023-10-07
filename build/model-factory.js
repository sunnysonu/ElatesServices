"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const schemas_1 = require("./schemas");
const modelNames_1 = __importDefault(require("./constants/modelNames"));
const BaseModel_1 = __importDefault(require("./base-model/BaseModel"));
const getModel = (modelName, modelSchema) => {
    switch (modelName) {
        case modelNames_1.default.USER_MODEL:
            return new model_1.UserModel(modelName, modelSchema);
        default:
            return new BaseModel_1.default(modelName, modelSchema);
    }
    ;
};
const modelFactory = {
    'user': getModel(modelNames_1.default.USER_MODEL, schemas_1.User),
};
exports.default = modelFactory;
