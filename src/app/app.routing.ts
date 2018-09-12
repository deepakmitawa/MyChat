import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { RoomListComponent } from './room-list/room-list.component';
import { ChatRoomComponent} from  './chat-room/chat-room.component';

import {HomeComponent} from './home/home.component';

const routes: Routes = [
    {path: '' , redirectTo: '/home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'roomlist', component: RoomListComponent},
{path: "chatroom", component: ChatRoomComponent } 
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);