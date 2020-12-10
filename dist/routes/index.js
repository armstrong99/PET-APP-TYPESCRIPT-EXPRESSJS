"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signup_1 = __importDefault(require("./access/signup"));
const channel_1 = __importDefault(require("./access/channel"));
const channel_2 = __importDefault(require("./profile/channel"));
const router = express_1.default.Router();
router.use("/signup", signup_1.default);
router.use("/channel", channel_1.default);
router.use("/list", channel_2.default);
exports.default = router;
