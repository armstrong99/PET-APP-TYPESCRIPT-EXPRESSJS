"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const listChannels_1 = __importDefault(require("../../controllers/Profile/listChannels"));
let router = express_1.default.Router();
router.post('/all', listChannels_1.default);
exports.default = router;
