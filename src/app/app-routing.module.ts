import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { HomeComponent } from './components/home/home.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RoomComponent } from './components/room/room.component';

const routes: Routes = [
  {
    path:"landing",component:LandingPageComponent
  },
  {
    path:"home",redirectTo:"home/primary",pathMatch:"full"
  },
  {
    path:"home",component:HomeLayoutComponent,
    children:[
      {
        path:"primary",component:HomeComponent
      },
      {
        path:"room",component:RoomComponent
      },
    ]
  },
  
  {
    path:"**",redirectTo:"landing",pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
