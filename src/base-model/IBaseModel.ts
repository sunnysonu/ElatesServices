import { Schema } from 'mongoose';
import { QueryOptions } from '../types';

export default interface IBaseModel {
    modelName: string,
    model: Schema,
    create: (data: any) => Promise<any>;
    findOne: (query: Object, proj: Object) => Promise<any>;
    find: (query: Object, proj: Object, opts: QueryOptions) => Promise<any>;
    findOneAndUpdate: (query: Object, update: Object, unset: Object, options: Object) => Promise<any>;
    delete: (id: string) => Promise<any>;
}