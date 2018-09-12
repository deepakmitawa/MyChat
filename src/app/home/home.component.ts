import { Component, OnInit,Input } from '@angular/core';
import { TransferService } from '../transfer.service'
import { Router  } from '@angular/router';
import {User} from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private transfereService:TransferService,private router:Router) { }

  userModel: User = new User();
   email:string="deepakmitawa@gmail.com";
   name:String="";
   @Input() valueToPass = 100;

  ngOnInit() {
  }

  moveNext=function(data){    
    this.transfereService.setData(this.name);
    this.router.navigateByUrl('/roomlist');//as per router    
  }

}
