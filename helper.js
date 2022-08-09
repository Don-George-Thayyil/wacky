const users = [];

function Join(socket, data, io) {
  socket.join(data.room);
  if (users.length == 0) {
    users.push({ id: socket.id, data: data, permission: "admin" });
  }
  else {
    users.push({ id: socket.id, data: data, permission: "joinee" });
  }

  socket.broadcast.to(data.room).emit("message", data);

  io.to(data.room).emit("users", { room: data.room, users: getRoomUsers(data.room) })
}



function Send(socket, data) {
  socket.broadcast.to(data.room).emit("message", data);
}


function Leave(id, io) {
  users.map((item) => {
    if (item.id == id) {
      let index = users.indexOf(item);
      users.splice(index, 1);
      io.to(item.data.room).emit("leave", { data: getRoomUsers(item.data.room), text: `${item.data.name} has left the chat!` });
    }
  });
}

function getRoomUsers(room) {
  return users.filter(user => user.data.room === room)
}

module.exports = { Send, Join, Leave };
