import * as Joi from 'joi';
import { CreateAdminCommand } from './userCommands';

const createAdminCommandValidator: Joi.ObjectSchema<CreateAdminCommand> = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
})

export {
    createAdminCommandValidator,
}