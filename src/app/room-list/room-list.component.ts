import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service'
import { Router  } from '@angular/router';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  
  loggedUserName:String="";
  roomName:String="";

  constructor(
   private transfereService:TransferService,
   private router:Router) {
    this.loggedUserName = this.transfereService.getData();
  
      if(this.loggedUserName){
        //
      }
      else{
        this.router.navigateByUrl('/home');
      }
   }

   moveNext=function()
   {
    this.transfereService.setData(this.loggedUserName);
    this.transfereService.setRoomData(this.roomName);
    this.router.navigateByUrl('/chatroom');//as per router  
   }

  ngOnInit() {
  }

}
