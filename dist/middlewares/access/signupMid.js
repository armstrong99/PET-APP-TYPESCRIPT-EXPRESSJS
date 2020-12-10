"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = 12;
const schema = joi_1.default.object({
    name: joi_1.default.string().alphanum().min(3).max(100).required(),
    password: joi_1.default.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
    email: joi_1.default.string()
        .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
    })
        .required(),
}).with("email", "password");
const signupMid = async (req, res, next) => {
    try {
        const value = await schema.validateAsync(req.body);
        // console.log(req.body);
        bcrypt_1.default.genSalt(saltRounds, function (err, salt) {
            bcrypt_1.default.hash(req.body.password, salt, function (err, hash) {
                req.body.password = hash;
            });
        });
        next();
    }
    catch (err) {
        // console.log(err); //for now just console the error, leta we use the standard Error API
        res.status(400).send({ err });
    }
};
exports.default = signupMid;
