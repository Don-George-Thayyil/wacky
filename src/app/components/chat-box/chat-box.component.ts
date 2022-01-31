import { Component, OnInit } from '@angular/core';
import { io, Socket } from 'socket.io-client';


@Component({
  selector: 'chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  socket:Socket;

  constructor() {
    this.socket = io("http://localhost:6969");
  }

  roomName: any = "Group Name";
  messages: any = [];
  message: any = "";
  user: any = "Don";
  side: any = false;
  alert:String = "";

  ngOnInit(): void {
    this.socket.on("broad",(msg)=>this.messages.push({ "user": this.user, "message": msg }))
    this.message = "";
  }



  addMessage() {
    this.messages.push({ "user": this.user, "message": this.message });
    this.socket.emit("message",this.message);
    // this.socket.on("broad",(msg)=>this.messages.push({ "user": this.user, "message": msg }))
    this.message = "";
  }



}
