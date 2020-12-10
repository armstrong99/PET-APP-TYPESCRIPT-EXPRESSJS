"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = "Blog";
exports.COLLECTION_NAME = "blogs";
const schema = new mongoose_1.Schema({
    title: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        maxlength: 500,
        trim: true,
    },
    description: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        maxlength: 2000,
        trim: true,
    },
    text: {
        type: mongoose_1.Schema.Types.String,
        required: false,
        select: false,
    },
    draftText: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        select: false,
    },
    tags: [
        {
            type: mongoose_1.Schema.Types.String,
            trim: true,
            uppercase: true,
        },
    ],
    author: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
    },
    imgUrl: {
        type: mongoose_1.Schema.Types.String,
        required: false,
        maxlength: 500,
        trim: true,
    },
    blogUrl: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        unique: true,
        maxlength: 200,
        trim: true,
    },
    likes: {
        type: mongoose_1.Schema.Types.Number,
        default: 0,
    },
    score: {
        type: mongoose_1.Schema.Types.Number,
        default: 0.01,
        max: 1,
        min: 0,
    },
    isSubmitted: {
        type: mongoose_1.Schema.Types.Boolean,
        default: false,
        select: false,
        index: true,
    },
    isDraft: {
        type: mongoose_1.Schema.Types.Boolean,
        default: true,
        select: false,
        index: true,
    },
    isPublished: {
        type: mongoose_1.Schema.Types.Boolean,
        default: false,
        select: false,
        index: true,
    },
    publishedAt: {
        type: mongoose_1.Schema.Types.Date,
        required: false,
        index: true,
    },
    status: {
        type: mongoose_1.Schema.Types.Boolean,
        default: true,
        select: false,
    },
    createdBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        select: false,
        index: true,
    },
    updatedBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
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
    channel: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Channel",
            required: true,
            select: false,
        },
    ],
}, {
    versionKey: false,
}).index({ title: "text", description: "text" }, { weights: { title: 3, description: 1 }, background: false });
exports.BlogModel = mongoose_1.model(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
