import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Room } from 'src/app/interfaces/rooms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  // variables-----------------------------------
  login: boolean = true;
  authenticated: boolean = false;
  rooms: Room[] = [{ name: "College Buddies", key: "college" }, { name: "Rebellions", key: "rebels" }, { name: "Fat Cats", key: "cats" }]
  hide:boolean =true;
  // forms---------------------------------------

  loginForm: FormGroup = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })

  signupForm: FormGroup = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    confirm: new FormControl("", Validators.required)
  })

  joinForm: FormGroup = new FormGroup({
    username: new FormControl("", Validators.required),
    room: new FormControl("", Validators.required),
    roomKey: new FormControl("", Validators.required)
  })
  // -------------------------------------------------------


  ngOnInit(): void {
  }

  // functions

  submit() {
    this.authenticated = true;
  }

  checkKey(item:Room,room:any,key:any){
    console.log(item.name , room?.value, item.key, key?.value)
        return (item.name == room?.value && item.key == key?.value )
  }

  joinRoom() {

    let name = this.joinForm.get("username");
    let room = this.joinForm.get("room");
    let key = this.joinForm.get("roomKey");

    this.rooms.map(item=>{

      if(this.checkKey(item,room,key)){
        this.router.navigate(["home/room"], {
          queryParams: {
            name: name?.value,
            room: room?.value,
          }
        })
      }
      // notification
      
    })
    
  }

  toggleLogin() {
    if (this.login) this.login = false;
    else this.login = true;
  }

}
