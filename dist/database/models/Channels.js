"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelModel = exports.ChannelCode = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = "Channel";
exports.COLLECTION_NAME = "channels";
var ChannelCode;
(function (ChannelCode) {
    ChannelCode["DOG"] = "DOG";
    ChannelCode["CAT"] = "CAT";
    ChannelCode["GOAT"] = "GOAT";
    ChannelCode["FISH"] = "FISH";
    ChannelCode["SNAIL"] = "SNAIL";
    ChannelCode["BIRD"] = "BIRD";
})(ChannelCode = exports.ChannelCode || (exports.ChannelCode = {}));
const schema = new mongoose_1.Schema({
    code: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        enum: [
            ChannelCode.DOG,
            ChannelCode.GOAT,
            ChannelCode.FISH,
            ChannelCode.CAT,
            ChannelCode.SNAIL,
            ChannelCode.BIRD
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
    imgUrl: {
        type: mongoose_1.Schema.Types.String,
        required: true
    }
});
exports.ChannelModel = mongoose_1.model(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
