import User, { userModel } from "../models/User";
import { ChannelModel, ChannelCode } from "../models/Channels";
import { InternalError } from "../../core/ApiError";
// import { Types } from "mongoose";

export default class UserRepo {
  // contains critical information of the user

  public static async create(user: User, code: string): Promise<any> {
    try {
      const now = new Date();
      let channel: any = "";

      channel = await ChannelModel.findOne({ code: code })
        .select("email password")
        .lean()
        .exec();

      // console.log(channel);

      //test channels entry with sample data
      let channelImages = {
        DOG:
          "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg",
        CAT:
          "https://i.pinimg.com/originals/36/0c/62/360c628d043b2461d011d0b7f9b4d880.jpg",
        GOAT: "https://wallpaperaccess.com/full/2048651.png",
        FISH:
          "https://i.pinimg.com/originals/28/dc/a9/28dca9e97f8231b112f1cf6dd3c76edf.jpg",
        SNAIL:
          "https://vistapointe.net/images/snail-8.jpg",
        BIRD:
          "https://i.pinimg.com/originals/58/d8/93/58d8936869d37fe2b94ecb74055f6f49.jpg",
      };

      if (!channel) {
        for (const i in ChannelCode) {
          await ChannelModel.create({
            code: i,
            createdAt: now,
            updatedAt: now,
            status: false,
            imgUrl: channelImages[i],
          });

          channel = await ChannelModel.findOne({ code: code })
            .select("email password")
            .lean()
            .exec();
        }
      }

      if (channel._id) {
        user.channels = [channel._id];
        user.createdAt = user.updatedAt = now;
        const createdUser = await userModel.create(user);

        return {
          user: createdUser.toObject(),
        };
      }
    } catch (error) {
      console.log(error);
    }
  }

  public static async joinChannel(
    email: string,
    channelCode: string
  ): Promise<any> {
    const { _id } = await ChannelModel.findOne({ code: channelCode });

    console.log(email);

    if (!_id) throw new InternalError("Channel must be defined");

    let user = await userModel.updateOne(
      { email: email },
      { $push: { channels: _id } }
    );

    // user.channels.push(_id);

    // user.save();

    return user;
  }

  public static async getChannels(
    email: string,
    member: boolean
  ): Promise<any> {
    let channels = await userModel.find({ email: email }).select("channels");

    switch (member) {
      //get channels I am a member of
      case true:
        let channelMem = await ChannelModel.find({
          _id: { $in: channels[0].channels },
        });
        return channelMem;

      case false:
        let channelNotMem = await ChannelModel.find({
          _id: { $nin: channels[0].channels },
        });
        return channelNotMem;
      default:
        break;
    }
  }
}
