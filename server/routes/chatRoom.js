import express from "express";
//controllers
import chatRoom from "../controllers/chatRoom.js";

const router = express.Router();

router
  .get("/", chatRoom.getRecentConversation)
  .get("/:id", chatRoom.getConversationsByRoomId)
  .post("/initiate", chatRoom.initiate)
  .post("/:roomId/message", chatRoom.postMessage)
  .put("/:roomId/mark-read", chatRoom.markConversationsReadByRoomId);

export default router;
