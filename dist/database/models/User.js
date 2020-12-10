"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = "User";
exports.COLLECTION_NAME = "users";
const schema = new mongoose_1.Schema({
    name: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        trim: true,
        maxlength: 100,
    },
    email: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        unique: true,
        trim: true,
        select: false,
    },
    password: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        select: false,
    },
    channels: {
        type: [
            {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "Channel",
            },
        ],
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        required: true,
        select: false,
    },
    updatedAt: {
        type: Date,
        required: true,
        select: false,
    },
});
exports.userModel = mongoose_1.model(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
