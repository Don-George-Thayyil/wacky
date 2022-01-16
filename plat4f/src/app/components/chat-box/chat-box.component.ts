import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  constructor() { }

  roomName:any = "Group Name";
  messages:any = [];
  message:any = "";
  user:any = "Don";
  side:any = false;

  ngOnInit(): void {
  }

  addMessage(){
    this.messages.push({"user":this.user,"message":this.message});
    this.message = "";
  }

  

}
