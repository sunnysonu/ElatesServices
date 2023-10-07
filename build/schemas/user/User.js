"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const types_1 = require("../../types");
const userSchema = new mongoose_1.Schema({
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
        enum: [types_1.Role.Admin, types_1.Role.User]
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
        required: function () {
            return this.role === types_1.Role.User;
        }
    },
    contactNumber: {
        type: String,
        required: function () {
            return this.role === types_1.Role.User;
        }
    },
    address: {
        type: Object,
        required: function () {
            return this.role === types_1.Role.User;
        }
    }
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
