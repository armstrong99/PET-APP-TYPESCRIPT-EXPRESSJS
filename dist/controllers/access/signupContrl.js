"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRepo_1 = __importDefault(require("../../database/repositories/userRepo"));
const Channels_1 = require("../../database/models/Channels");
const signupContrl = async (req, res, next) => {
    // console.log(req.body);
    const userObj = await userRepo_1.default.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }, Channels_1.ChannelCode.CAT);
    return res.send(userObj);
};
exports.default = signupContrl;
