import User from "database/models/User";
import UserRepo from "database/repositories/userRepo";
import { Response, Request, NextFunction } from "express";
import { SuccessResponse } from "../core/ApiResponse";

const signupContrl = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<any>> => {
  // const userObj = await UserRepo.create(
  //   {
  //     name: req.body.name,
  //     email: req.body.email,
  //     password: req.body.pass,
  //   } as User,
  //   "DOG"
  // );
  return res.send({});
};

export default signupContrl;
