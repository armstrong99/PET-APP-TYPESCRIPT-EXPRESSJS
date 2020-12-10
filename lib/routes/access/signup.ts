import express from "express";
import signupMid from "../../middlewares/access/signupMid";
import signupContrl from "../../controllers/access/signupContrl";

const router = express.Router();

router.post("/basic", signupMid, signupContrl);

export default router;
