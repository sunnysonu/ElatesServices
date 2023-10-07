import { Schema, model } from 'mongoose';
import IUser from './IUser';
import { Role } from '../../types';

const userSchema = new Schema<IUser>({
    _id: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: [Role.Admin, Role.User]
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
    isPremiumMember: {
        type: Boolean,
        default: false,
        required: function() {
            return this.role === Role.User;
        }
    },
    contactNumber: {
        type: String,
        required: function() {
            return this.role === Role.User;
        }
    },
    address: {
        type: Object,
        required: function() {
            return this.role === Role.User;
        }
    }
});

const User = model<IUser>('User', userSchema);

export default User;
