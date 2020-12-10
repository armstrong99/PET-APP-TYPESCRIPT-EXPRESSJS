import Joi from "joi";
import { Request, NextFunction, Response } from "express";

const schema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
}).with("email", "password");

interface validate {
  name: string;
  email: string;
  password: string;
}

const signupMid = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const value = await schema.validateAsync(req.body);
    console.log(value);
    next();
  } catch (err) {
    console.log(err); //for now just console the error, leta we use the standard Error API
  }
};

export default signupMid;
