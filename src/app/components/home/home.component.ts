import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  rooms: string[] = ["College Buddies", "Rebellions", "Fat Cats"]
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
    roomKey: new FormControl("")
  })
  // -------------------------------------------------------


  ngOnInit(): void {
  }

  // functions

  submit() {
    this.authenticated = true;
  }

  joinRoom() {
    let name = this.joinForm.get("username");
    let room = this.joinForm.get("room");
    this.router.navigate(["room"],{
      queryParams:{
        name:name?.value,
        room:room?.value,
      }
    })
    console.log(this.joinForm.value)
  }

  toggleLogin() {
    if (this.login) this.login = false;
    else this.login = true;
  }

}
