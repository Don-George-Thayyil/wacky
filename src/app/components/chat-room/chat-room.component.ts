import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  constructor() { }

  participants: any = [
    { name: "User 1", id: "+919435234234" },
    { name: "User 2", id: "+919435234323" }
  ]

  ngOnInit(): void {
  }

}
