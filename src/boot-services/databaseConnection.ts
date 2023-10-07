import mongoose from "mongoose";
import config from '../config.json'
/*
 * Author: Addapa Sunny
 */
const establishDatabaseConnection = (): void => {
    try {
        console.log(`Connecting to Mongo DB on port : ${config.mongo.port}`);

        // Establising Mongo connection
        mongoose.connect(`${config.mongo.host}:${config.mongo.port}/${config.mongo.dbname}`);

        console.log(`Successfully connected to Mongo DB`);
    } catch (err) {

        console.error(`Error while Connecting to Mongo DB`);

    }
}

export default establishDatabaseConnection;