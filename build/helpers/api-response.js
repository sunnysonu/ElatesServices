"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.respondUnauthorized = void 0;
const respondUnauthorized = (res, err) => {
    res.status(401);
    res.send({
        message: err !== null && err !== void 0 ? err : `Unauthorized`
    });
};
exports.respondUnauthorized = respondUnauthorized;
