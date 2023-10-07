import { Promise } from 'bluebird';
import { UserModel } from "../model";
import modelFactory from "../model-factory";
import { JWTService } from '../app-services';
import { JWTData, Role } from '../types';
import { CreateAdminCommand } from '../commands/user/userCommands';
import config from '../config.json';
import IUser from '../schemas/user/IUser';

interface IUserService {
    modelInstance: UserModel;

    getAuthToken(email: string, password: string): Promise<any>;

    createAdmin(command: CreateAdminCommand): Promise<any>;
}

class UserService implements IUserService {
    modelInstance: UserModel;

    constructor() {
        this.modelInstance = modelFactory.user;
    }

    public getAuthToken(email: string, password: string): Promise<any> {
        const jwtServiceInst = new JWTService();

        if(!email || !password) {
            console.error(`Invalid Credentails`);
            return Promise.reject(`Invalid Credentails`);
        }


        return this.modelInstance.getUserByCredentails(email, password)
        .then(user => {
            if(!user || !user._id) {
                console.error(`No User Record exists with given credentails`);
                return Promise.reject(`Invalid Credentails`);
            }
            const jwtData: JWTData = {
                userId: user._id,
            };
            
            const token = jwtServiceInst.generateNewToken(jwtData, config.authorization.privateKey, {});
            return {
                userId: user._id,
                token: token,
            }
        })
    }

    public createAdmin(command: CreateAdminCommand): Promise<any> {
        const user: IUser = {
            username: command.username,
            firstname: command.firstname,
            lastname: command.lastname,
            email: command.email,
            password: command.password,
            role: Role.Admin,
        }

        return this.modelInstance.createUser(user);
    }
}

export default UserService;