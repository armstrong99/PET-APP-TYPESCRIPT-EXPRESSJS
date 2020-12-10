import User from "../../database/models/User";
import UserRepo from "../../database/repositories/userRepo";
import { Response, Request, NextFunction } from "express";
import { ChannelCode } from "../../database/models/Channels";

const signupContrl = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<any>> => {
  // console.log(req.body);

  const userObj = await UserRepo.joinChannel(req.body.email, req.body.channelName);
  return res.status(200).send({success: true});
};

export default signupContrl;
