"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signupMid_1 = __importDefault(require("../../middlewares/access/signupMid"));
const signupContrl_1 = __importDefault(require("../../controllers/signupContrl"));
const router = express_1.default.Router();
router.post("/join", signupMid_1.default, signupContrl_1.default);
exports.default = router;
