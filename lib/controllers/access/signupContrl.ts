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

  const userObj = await UserRepo.create(
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    } as User,
    ChannelCode.CAT
  );
  return res.send(userObj);
};

export default signupContrl;
