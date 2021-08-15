import express from "express";

//controllers
import {
  onGetAllUsers,
  onGetUserById,
  onCreateUser,
  onDeleteUserById,
} from "../controllers/user.js";

const router = express.Router();

router
  .get("/", onGetAllUsers)
  .get("/:id", onGetUserById)
  .post("/", onCreateUser)
  .delete("/:id", onDeleteUserById);

export default router;
