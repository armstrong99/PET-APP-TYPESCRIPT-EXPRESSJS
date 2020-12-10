import User, { userModel } from "../models/User";
import { ChannelModel } from "../models/Channels";
import { InternalError } from "../../core/ApiError";
// import { Types } from "mongoose";

export default class UserRepo {
  // contains critical information of the user

  public static async create(user: User, ChannelCode: string): Promise<any> {
    const now = new Date();

    const channel = await ChannelModel.findOne({ name: ChannelCode })
      .select("+email +password")
      .lean()
      .exec();

    if (!channel) throw new InternalError("Channel must be defined");

    user.channels = [channel._id];
    user.createdAt = user.updatedAt = now;
    const createdUser = await userModel.create(user);

    return {
      user: createdUser.toObject(),
    };
  }
}
