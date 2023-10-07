"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bluebird_1 = __importDefault(require("bluebird"));
const helpers_1 = require("../helpers");
/*
 * Author: Addapa Sunny
 */
class BaseModel {
    constructor(modelName, model) {
        this.model = model;
        this.modelName = modelName;
    }
    create(data) {
        const record = Object.assign({}, data);
        if (!record._id) {
            record._id = (0, helpers_1.generateId)(this.modelName);
        }
        return this.model(record).save();
    }
    findOne(query, proj) {
        return this.model.findOne(query, proj)
            .then((rec) => {
            return rec ? bluebird_1.default.resolve(rec.toObject(rec)) : bluebird_1.default.resolve(undefined);
        });
    }
    find(query, proj, opts) {
        let findP = this.model.find(query, proj);
        if (opts) {
            if (opts.sort)
                findP.sort(opts.sort);
            if (opts.pagination) {
                findP.skip(opts.pagination.skip);
                findP.limit(opts.pagination.limit);
            }
        }
        return findP.then((recs) => {
            bluebird_1.default.resolve(recs.map(rec => rec.toObject(rec)));
        });
    }
    findOneAndUpdate(query, update, unset, options) {
        let updateSet = {
            $set: {},
            $unset: {},
        };
        let opts = options || {};
        if (update)
            updateSet["$set"] = update;
        if (unset)
            updateSet["$unset"] = unset;
        return this.model.findOneAndUpdate(query, updateSet, opts);
    }
    delete(id) {
        return this.model.findByIdAndRemove({ _id: id });
    }
    ;
}
exports.default = BaseModel;
