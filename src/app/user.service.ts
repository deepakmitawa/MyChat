export class User {

  id:number;
  name:String="";
 roomName:String="";

 

  constructor(values:Object={}){
      Object.assign(this, values);
  }
}
