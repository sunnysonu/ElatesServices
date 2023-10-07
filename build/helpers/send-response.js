"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (response, statusCode, message) => {
    response.status(statusCode);
    if (statusCode < 300) {
        const responseMessage = {
            statusCode: statusCode,
            message: message
        };
        response.send(responseMessage);
    }
    else {
        const responseMessage = {
            statusCode: statusCode,
            error: message,
        };
        response.send(responseMessage);
    }
};
exports.default = sendResponse;
