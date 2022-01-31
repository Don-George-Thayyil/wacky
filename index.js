const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path")

const app = express();
const server = http.createServer(app);
const io = socketio(server,{
    cors:{
        origin:"http://localhost:4200"
    }
});

app.use(express.static(path.join(__dirname,"public")));



io.on("connection",socket=>{
    console.log("User joined!")
    socket.on("message",(msg)=>{
        socket.broadcast.emit("broad",msg);
    })
    io.on("disconnect",socket=>{
        console.log("User left!")
    })
})

const PORT = 6969;

server.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));