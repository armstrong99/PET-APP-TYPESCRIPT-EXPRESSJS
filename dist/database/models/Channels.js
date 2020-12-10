"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = "Channel";
exports.COLLECTION_NAME = "channels";
const schema = new mongoose_1.Schema({
    name: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        enum: [
            "DOG" /* DOG */,
            "GOAT" /* GOAT */,
            "FISH" /* FISH */,
            "CAT" /* CAT */,
        ],
    },
    status: {
        type: mongoose_1.Schema.Types.Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    updatedAt: {
        type: Date,
        required: true,
    },
});
exports.ChannelModel = mongoose_1.model(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
