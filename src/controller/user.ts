import { Application, Request, Response } from 'express';
import { ControllerType } from './types';
import ServiceFactory from '../services';
import { CommandServiceHandler, QueryServiceHandler } from '../app-services/ServiceHandler';
import { createAdminCommandValidator } from '../commands/user/userCommandsValidator';
import { Promise } from 'bluebird';
import config from '../config.json';


const getAuthToken = (req: Request, res: Response): void => {
    const serviceInstance = ServiceFactory.getUserService();
    const { email, password } = req.headers;

    const serviceP = Promise.resolve(serviceInstance.getAuthToken(email as string, password as string));
    QueryServiceHandler(req, res, serviceP);
}

const createAdminUser = (req: Request, res: Response): void => {
    const serviceInstance = ServiceFactory.getUserService();
    const serviceP = Promise.resolve(serviceInstance.createAdmin(req.body));

    CommandServiceHandler(createAdminCommandValidator, req, res, 'CreateAdminCommand', serviceP);
}

const userController: ControllerType = (app: Application) => {
    app.get(`${config.api.authtoken}`, (req: Request, res: Response) => getAuthToken(req, res));
    app.post(`${config.api.createadmin}`, (req: Request, res: Response) => createAdminUser(req, res));
}

export default userController;