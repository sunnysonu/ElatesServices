import { Role } from '../../types';

interface CreateAdminCommand {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
}

export {
    CreateAdminCommand,
};