const rooms = [];

function Join(socket, data) {
  rooms.push({ id: socket.id, data: data });
  socket.broadcast.emit("message", data);
}

function Send(socket, data) {
  socket.broadcast.emit("message", data);
}

function Leave(id, io) {
    console.log(rooms.length);
  rooms.map((item) => {
    if (item.id == id) {
      let index = rooms.indexOf(item);
      rooms.splice(index, 1);
      io.emit("leave", `${item.data.name} has left the chat!`);
      console.log(rooms.length)
      return null;
    }
  });
}

module.exports = { Send, Join, Leave };
