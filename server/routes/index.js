import express from "express";
// controllers
import users from "../controllers/user.js";
import { encode } from "../middlwares/jwt.js";
// middlewares

const router = express.Router();

router.post("/login/:userId", encode, (req, res, next) => {});

export default router;
