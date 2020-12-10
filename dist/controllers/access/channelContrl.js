"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRepo_1 = __importDefault(require("../../database/repositories/userRepo"));
const signupContrl = async (req, res, next) => {
    // console.log(req.body);
    const userObj = await userRepo_1.default.joinChannel(req.body.email, req.body.channelName);
    return res.status(200).send({ success: true });
};
exports.default = signupContrl;
