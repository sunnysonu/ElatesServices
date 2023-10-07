"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const generateId = (model) => {
    if (!model) {
        throw new Error("Invalid Model Name");
    }
    const modelCode = model.toLowerCase().slice(0, 3);
    return `${modelCode}-${(0, uuid_1.v1)()}`;
};
exports.default = generateId;
