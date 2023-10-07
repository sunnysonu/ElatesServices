import { Application } from 'express';

export type ControllerType = (app: Application) => void;