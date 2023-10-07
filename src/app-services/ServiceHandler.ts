import Joi from 'joi';
import { Request, Response } from 'express';
import Promise from 'bluebird';
import { sendResponse } from '../helpers';

const CommandServiceHandler = (command: Joi.ObjectSchema<any>, req: Request, res: Response, commandName: string, callback: Promise<any>): Promise<any> => {
    const requestBody = req.body;
    if (!requestBody) {
        sendResponse(res, 403, `Missing Request Body`);
    }

    const validateCommandP = command.validateAsync(requestBody);

    return Promise.resolve(validateCommandP)
        .then(() => {
            return callback
                .then(() => {
                    console.log(`Command: ${commandName} Executed Successfully`);
                    sendResponse(res, 200, `Success`);
                })
                .catch((err: any) => {
                    console.error(`Error While Executing Command: ${command.label} ${err}`);
                    sendResponse(res, 500, err);
                })
        })
        .catch((err: any) => {
            console.error(`Invalid Payload : ${err}`);
            sendResponse(res, 403, err);
        });
}

const QueryServiceHandler = (req: Request, res: Response, callback: Promise<any>) => {
    return callback
    .then((data) => {
        console.log(`Query Executed successfully`);
        sendResponse(res, 200, data);
    })
    .catch((err: any) => {
        console.error(`Error while executing the Query ${err}`);
        sendResponse(res, 400, err);
    })
}

export { CommandServiceHandler, QueryServiceHandler };