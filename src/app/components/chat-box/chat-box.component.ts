import { Component, Input, OnInit } from '@angular/core';
import { io, Socket } from 'socket.io-client';


interface Floater {
  name?: string;
  room?: string;
  time?: string;
  type?: string;
  message?: string;
  id?: string;
}



@Component({
  selector: 'chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  socket: Socket;


  constructor(
    // private ytube:YouTubePlayer
  ) {
    this.socket = io("http://localhost:6969");
  }

  @Input() roomName: string = "";
  messages: Floater[] = [];
  message: string = "";
  @Input() user: string = "";
  side: boolean = false;
  alert: string = "";
  roomMembers: any = [];



  ngOnInit(): void {

    this.socket.emit("joinRoom", this.formatMessage(`${this.user} has joined the chat!`, "join"));

    this.socket.on("users", (data) => {
      this.roomMembers = data.users
    })

    this.socket.on("message", (data) => {
      this.messages.push(data);
    });

    this.socket.on("leave", (msg) => {
      this.messages.push(this.formatMessage(msg.text, "join"));
      this.roomMembers = msg.data;
    })

  }

  popByName(name: string) {
    let index = this.roomMembers.indexOf(name);
    this.roomMembers = this.roomMembers.splice(index, 1);
  }



  formatMessage(message: string, type: string): Floater {
    return {
      name: this.user,
      room: this.roomName,
      time: new Date().toLocaleTimeString(),
      type: type,
      message: message
    }
  }

  addMessage(message = this.message, type = "message") {

    if (message !== '') {
      let data = this.formatMessage(message, type)
      this.socket.emit("response", data);
      this.messages.push(data);
    }
    this.message = "";
  }


}
