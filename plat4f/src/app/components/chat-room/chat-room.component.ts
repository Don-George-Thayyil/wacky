import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  constructor() { }

  participants: any = [
    { name: "don", id: "1" },
    { name: "square", id: "2" },
    { name: "chaami", id: "3" },
    { name: "kaalan", id: "4" },
    { name: "poocha", id: "5" },
    { name: "don", id: "1" },
    { name: "square", id: "2" },
    { name: "chaami", id: "3" },
    { name: "kaalan", id: "4" },
    { name: "poocha", id: "5" },
    { name: "don", id: "1" },
    { name: "square", id: "2" },
    { name: "chaami", id: "3" },
    { name: "kaalan", id: "4" },
    { name: "poocha", id: "5" },
    { name: "don", id: "1" },
    { name: "square", id: "2" },
    { name: "chaami", id: "3" },
    { name: "kaalan", id: "4" },
    { name: "poocha", id: "5" }
  ]

  ngOnInit(): void {
  }

}
