import IBaseModel from "./IBaseModel";
import Promise from 'bluebird';
import { QueryOptions } from '../types';
import { generateId } from "../helpers";
import { Schema } from 'mongoose';

/*
 * Author: Addapa Sunny
 */

class BaseModel implements IBaseModel {
    model: any;
    modelName: string;
    constructor(modelName: string, model: any) {
        this.model = model;
        this.modelName = modelName;
    }

    create(data: any) {
        const record = {...data};
        if (!record._id) {
            record._id = generateId(this.modelName);
        }
        
        return this.model(record).save();
    }

    findOne(query: Object, proj: Object) {
        return this.model.findOne(query, proj)
            .then((rec: any) => {
                return rec? Promise.resolve(rec.toObject(rec)): Promise.resolve(undefined); 
            })
    }

    find(query: Object, proj: Object, opts: QueryOptions) {
        let findP = this.model.find(query, proj);
        if (opts) {
            if (opts.sort) findP.sort(opts.sort);
            if (opts.pagination) {
                findP.skip(opts.pagination.skip);
                findP.limit(opts.pagination.limit);
            }
        }

        return findP.then((recs: any[]) => {
            Promise.resolve(recs.map(rec => rec.toObject(rec)));
        })
    }

    findOneAndUpdate(query: Object, update: Object, unset: Object, options: Object) {
        let updateSet = {
            $set: {},
            $unset: {},
        };
        let opts = options || {};
        if (update) updateSet["$set"] = update;
        if (unset) updateSet["$unset"] = unset;
        
        return this.model.findOneAndUpdate(query, updateSet, opts);
    }

    delete(id: string) {
        return this.model.findByIdAndRemove({ _id: id });
    };
}

export default BaseModel;