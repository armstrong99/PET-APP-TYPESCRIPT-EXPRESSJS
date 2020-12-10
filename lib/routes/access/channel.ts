import express from "express";
import channelMid from "../../middlewares/access/signupMid";
import channelContrl from "../../controllers/access/channelContrl";

const router = express.Router();

router.post("/join", channelContrl);

export default router;
