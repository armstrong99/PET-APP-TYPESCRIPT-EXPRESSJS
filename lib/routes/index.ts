import express from "express";
import signup from "./access/signup";
import channel from "./access/channel";
import listChannels from "./profile/channel";

const router = express.Router();

router.use("/signup", signup);

router.use("/channel", channel);
 
router.use("/list", listChannels);

export default router;
