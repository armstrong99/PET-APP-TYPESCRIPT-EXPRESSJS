import UserRepo from "../../database/repositories/userRepo";
import { Response, Request, NextFunction } from "express";

const signupContrl = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<any>> => {
  // console.log(req.body);
 
  const channeList = await UserRepo.getChannels(
    req.body.email,
    req.body.member
  );
  return res.status(200).send(channeList);
};

export default signupContrl;
