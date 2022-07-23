const users = [];

function Join(socket, data) {
  socket.join(data.room);
  users.push({ id: socket.id, data: data });
  socket.broadcast.to(data.room).emit("message", data);
}

function Send(socket, data) {
  socket.broadcast.to(data.room).emit("message", data);
}

function Leave(id, io) {
  users.map((item) => {
    if (item.id == id) {
      let index = users.indexOf(item);
      users.splice(index, 1);
      io.to(item.data.room).emit("leave", `${item.data.name} has left the chat!`);
    }
  });
}

module.exports = { Send, Join, Leave };
