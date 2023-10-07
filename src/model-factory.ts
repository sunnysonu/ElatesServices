import { Schema } from 'mongoose';
import { UserModel } from './model';
import { User } from './schemas';
import ModelNames from './constants/modelNames';
import BaseModel from './base-model/BaseModel';

const getModel = (modelName: string, modelSchema: any) => {
    switch(modelName) {
        case ModelNames.USER_MODEL:
            return new UserModel(modelName, modelSchema);
        default:
            return new BaseModel(modelName, modelSchema);
    };
};

const modelFactory = {
    'user': getModel(ModelNames.USER_MODEL, User) as UserModel,
}

export default modelFactory;