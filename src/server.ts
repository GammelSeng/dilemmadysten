import express from "express";
import http from "http";
import { registerServer } from "./sockets";

const app = express();
const server = http.createServer(app);

registerServer(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
