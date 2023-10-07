import { Response } from 'express';
import { SuccessResponse, ErrorResponse } from '../types';

const sendResponse = (response: Response, statusCode: number, message: any): any => {
    response.status(statusCode);
    if (statusCode < 300) {
        const responseMessage: SuccessResponse = {
            statusCode: statusCode,
            message: message
        };
        response.send(responseMessage);
    } else {
        const responseMessage: ErrorResponse = {
            statusCode: statusCode,
            error: message,
        }
        response.send(responseMessage);
    }
}

export default sendResponse;