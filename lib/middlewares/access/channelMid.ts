import Joi from "joi";
import { Request, NextFunction, Response } from "express";

const schema = Joi.object({
  auth: Joi.string().alphanum().min(100).required(),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
}).with("email", "auth");

//this middleware should authenticate the user via authToken and validate the request schema as well
const channelMid = (req: Request, res: Response, next: NextFunction) => {
  next();
};

export default channelMid;
