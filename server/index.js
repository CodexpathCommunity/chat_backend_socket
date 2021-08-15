import express from "express";
import http from "http";
import logger from "morgan";
import cors from "cors";
// routes
import indexRouter from "./routes/index.js";
import userRouter from "./routes/user.js";
import chatRoomRouter from "./routes/chatRoom.js";
import deleteRouter from "./routes/delete.js";
//middlware
import { decode } from "./middlewares/jwt.js";

//initialize express
const app = express();

//get port from environment and store in Express
const port = process.env.PORT || 3000;
app.set("port", port);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/room", decode, chatRoomRouter);
app.use("/delete", deleteRouter);
//catch 404 error and forward to error handlers
app.use("*", (req, res) => {
  return res.status(404).json({
    success: false,
    message: "Api does not exist",
  });
});

//create http server
const server = http.createServer(app);
//listen on provided port
server.listen(port);
//event listener for http server
server.on("listening", () => {
  console.log(`server listening on port :: http://localhost:${port}`);
});
