"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const channelContrl_1 = __importDefault(require("../../controllers/access/channelContrl"));
const router = express_1.default.Router();
router.post("/join", channelContrl_1.default);
exports.default = router;
