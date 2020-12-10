"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
const Channels_1 = require("../models/Channels");
const ApiError_1 = require("../../core/ApiError");
// import { Types } from "mongoose";
class UserRepo {
    // contains critical information of the user
    static async create(user, ChannelCode) {
        const now = new Date();
        const channel = await Channels_1.ChannelModel.findOne({ name: ChannelCode })
            .select("+email +password")
            .lean()
            .exec();
        if (!channel)
            throw new ApiError_1.InternalError("Channel must be defined");
        user.channels = [channel._id];
        user.createdAt = user.updatedAt = now;
        const createdUser = await User_1.userModel.create(user);
        return {
            user: createdUser.toObject(),
        };
    }
}
exports.default = UserRepo;
