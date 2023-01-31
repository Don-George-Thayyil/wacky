const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const Helpers = require("./helper");

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*:*",
  },
});

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  
  socket.on("joinRoom", (data) => {
    Helpers.Join(socket, data, io);
  });

  socket.on("response", (data) => {
    Helpers.Send(socket, data);
  })

  socket.on("disconnect", async () => {
    Helpers.Leave(socket.id, io);
  });

});

const PORT = 6969;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
