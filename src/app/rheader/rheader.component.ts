import { Component, signal } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-rheader',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rheader.component.html',
  styleUrl: './rheader.component.css'
})
export class RheaderComponent {
name:string="Rajnish";//string,number,date,boolean
age:number=21;
check:boolean=false;
current:Date=new Date();
a="text";
fname=signal("RAJNISH");
constructor(){}          //used to initialize a class variable
showresult(message:string){
  console.log(message);
}
changeVariable(){
  this.name="Rajnish Kumar";
}
change(){
  this.fname.set("RAJNISH KUMAR");
}
}
