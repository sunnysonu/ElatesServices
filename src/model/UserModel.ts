import BaseModel from "../base-model/BaseModel";
import IUser from '../schemas/user/IUser';
import { Promise } from 'bluebird';
import { Schema } from 'mongoose';

class UserModel extends BaseModel {
    
    constructor(modelName: string, model: any) {
        super(modelName, model);
    }

    getUserById(userId: string): Promise<IUser> {
        if (!userId) {
           return Promise.reject(`UserId should be valid value userId: ${userId}`);
        }

        const query = {
            _id: userId
        };
        return this.findOne(query, {});
    }

    getUserByCredentails(email: string, password: string): Promise<IUser> {

        if(!email || !password) {
            return Promise.reject(`Invalid Credentails`);
        }

        const query = {
            email, password
        };
        return this.findOne(query, {})
        .then((data: any) => {
            return data;
        });
    }

    createUser(user: IUser): Promise<any> {
        if(!user) return Promise.reject(`Invalid user data`);

        return this.create(user);
    }
}

export default UserModel;