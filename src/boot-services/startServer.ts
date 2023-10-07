import { Application } from "express";
import config from '../config.json';3

const startServer = (app: Application) => {
    try {
        app.listen(config.app.port, () => {
            console.log(`Elates Server started running on port : ${config.app.port}`);
        })
    } catch (err) {
        console.error(`Error while running the Application on port : ${config.app.port} ${err}`);
    }
}

export default startServer;