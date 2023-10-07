"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boot_services_1 = require("./boot-services");
/*
 * Author: Addapa Sunny
 */
const boot = () => {
    /* Establing Database Connection */
    (0, boot_services_1.establishDatabaseConnection)();
    /* Initiating the Express App */
    const app = (0, boot_services_1.initiateExpressApp)();
    /* Starting up the server */
    (0, boot_services_1.startServer)(app);
    /* Loading Controller */
    (0, boot_services_1.loadControllers)(app);
};
exports.default = boot;
