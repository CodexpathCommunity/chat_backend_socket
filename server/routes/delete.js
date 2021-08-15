import express from "express";
//controllers
import {
  deleteRoomByRoomId,
  deleteMessageById,
} from "../controllers/delete.js";

const router = express.Router();

router
  .delete("/room/:roomId", deleteRoomByRoomId)
  .delete("/message/:messageId", deleteMessageById);

export default router;
