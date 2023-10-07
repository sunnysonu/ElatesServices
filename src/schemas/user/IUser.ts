import {Role} from '../../types';

export interface BaseUser {
    _id?: string;
    firstname: string;
    lastname: string;
    username: string;
    role: Role;
    password: string;
    email: string;
    createdOn?: Date;
}

export interface User extends BaseUser {
    isPremiumMember: boolean;
    contactNumber: string;
    address: Address;
}

type IUser = BaseUser | User;

export default IUser;
