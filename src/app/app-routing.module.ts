import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { HomeComponent } from './components/home/home.component';
import { RoomComponent } from './components/room/room.component';

const routes: Routes = [
  {
    path:"home",component:HomeComponent
  },
  {
    path:"room",component:RoomComponent
  },
  {
    path:"**",redirectTo:"home",pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
