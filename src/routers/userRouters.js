import express from "express";
import * as userControllers from "../controllers/userControllers.js";
import {
  signUpMiddleware,
  loginMiddleware,
} from "../middlewares/userMiddlewares.js";

const router = express.Router();

router.post("/sign-up", signUpMiddleware, userControllers.signUp);
router.post("/login", loginMiddleware, userControllers.login);
router.get("/address", userControllers.userAddress);
router.get("/name", userControllers.userName);
router.delete("/logout", userControllers.logout);

export default router;
