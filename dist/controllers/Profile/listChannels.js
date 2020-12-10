"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRepo_1 = __importDefault(require("../../database/repositories/userRepo"));
const signupContrl = async (req, res, next) => {
    // console.log(req.body);
    const channeList = await userRepo_1.default.getChannels(req.body.email, req.body.member);
    return res.status(200).send(channeList);
};
exports.default = signupContrl;
