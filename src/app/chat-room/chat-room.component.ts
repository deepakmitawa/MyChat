import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service'
import { Router  } from '@angular/router';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  loggedUserName = this.transfereService.getData();
  roomName=this.transfereService.getRoomData();

  constructor(
   private transfereService:TransferService,
   private router:Router) {
      if(this.loggedUserName){
        //this.loggedUserName=this.data;
      }
      else{
        this.router.navigateByUrl('/home');
      }
   }

  ngOnInit() {
  }

}
