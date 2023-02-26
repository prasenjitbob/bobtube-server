import express from "express";
import { googleAuth, signin, signup, isLogedIn } from "../controllers/auth.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//Check token
router.get("/isLogedIn", verifyToken, isLogedIn)

//CREATE A USER
router.post("/signup", signup)

//SIGN IN
router.post("/signin", signin)

//GOOGLE AUTH
router.post("/google", googleAuth)

export default router;