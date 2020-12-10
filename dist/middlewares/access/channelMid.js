"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const schema = joi_1.default.object({
    auth: joi_1.default.string().alphanum().min(100).required(),
    email: joi_1.default.string()
        .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
    })
        .required(),
}).with("email", "auth");
//this middleware should authenticate the user via authToken and validate the request schema as well
const channelMid = (req, res, next) => {
    next();
};
exports.default = channelMid;
