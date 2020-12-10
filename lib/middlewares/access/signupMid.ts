import Joi from "joi";
import { Request, NextFunction, Response } from "express";
import bcrypt from "bcrypt";
const saltRounds = 12;


const schema = Joi.object({
  name: Joi.string().alphanum().min(3).max(100).required(),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
}).with("email", "password");

const signupMid = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const value = await schema.validateAsync(req.body);
    // console.log(req.body);
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
          req.body.password = hash
      });
  });
    next();
  } catch (err) {
    // console.log(err); //for now just console the error, leta we use the standard Error API
    res.status(400).send({ err });
  }
};

export default signupMid;
