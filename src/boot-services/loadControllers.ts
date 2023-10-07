import * as _ from 'lodash';
import { Application } from 'express';
import { ControllerType } from '../controller/types';
import { userController } from '../controller';

const loadControllers = (app: Application): void => {
    try {
        console.log(`Loading Controllers`);

        _.forEach(getControllers(), controller => {
            controller(app);
        })
    } catch (err) {
        console.error(`Error while loading controllers ${err}`);
    }
    console.log(`Successfully Loaded Controllers`);
}

const getControllers = (): ControllerType[] => {
    const controllers: ControllerType[] = [
        userController,
    ];

    return controllers;
}

export default loadControllers;