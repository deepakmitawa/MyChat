import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routingModule } from './app.routing'
import { AppComponent } from './app.component';
import { RoomListComponent } from './room-list/room-list.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,    
    ChatRoomComponent, HomeComponent
  ],
  imports: [
    BrowserModule, 
    routingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
