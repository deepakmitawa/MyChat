import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor() { }

  private data:String;
  private roomName:String;

  setData(data){
    this.data = data;
  }

  getData(){
    let temp = this.data;
    this.clearData();
    return temp;
  }

  clearData(){
    this.data = undefined;
  }

  setRoomData(data){
    this.roomName = data;
  }

  getRoomData(){
    let temp =  this.roomName;
    this.clearRoomData();
    return temp;
  }

  clearRoomData(){
    this.roomName = undefined;
  }
}
