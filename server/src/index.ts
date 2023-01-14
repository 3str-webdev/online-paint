import { updateHandler } from "./events/handlers/updateHandler";
import express from "express";
import env from "dotenv";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import CanvasController from "./controllers/CanvasController";

env.config({ path: `.${process.env.NODE_ENV}.env` });
const PORT = process.env.PORT;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(
  cors({
    origin: "*",
  })
);

io.on("connection", (socket) => {
  console.log("Server was connected");
  let canvasViewport: IRect = {
    coords: { x: 0, y: 0 },
    w: 500,
    h: 500,
  };

  updateHandler(socket, canvasViewport);

  io.on("move", (viewport: IRect) => {
    canvasViewport = viewport;
    updateHandler(socket, canvasViewport);
  });

  io.on("disconnect", () => {
    console.log("Disconnect");
  });
});

server.listen(PORT, () => {
  console.log(`Server started on localhost:${PORT}`);
});
