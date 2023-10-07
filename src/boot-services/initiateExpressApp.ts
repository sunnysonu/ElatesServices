import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from '../config.json';

/*
 * Author: Addapa Sunny
 * Instantiates the Express app.
 */

const initiateExpressApp = (): Application => {
    const app = express();
    try {
        app.use(cors(config.corsOptions));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true
        }))

    } catch (err) {
        console.error(`Error while Initiating Express App ${err}`);
    }
    console.log(`Successfully Initiated Express App`);
    return app;
}

export default initiateExpressApp;