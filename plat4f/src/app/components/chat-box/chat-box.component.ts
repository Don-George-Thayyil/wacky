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

  ngOnInit(): void {
  }

  addMessage(event: any){
    console.log(event)
    this.messages.push(event)
  }

}
