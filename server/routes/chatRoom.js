import express from "express";
//controllers
import {
  getRecentConversation,
  getConversationsByRoomId,
  initiate,
  postMessage,
  markConversationsReadByRoomId,
} from "../controllers/chatRoom.js";

const router = express.Router();

router
  .get("/", getRecentConversation)
  .get("/:id", getConversationsByRoomId)
  .post("/initiate", initiate)
  .post("/:roomId/message", postMessage)
  .put("/:roomId/mark-read", markConversationsReadByRoomId);

export default router;
