import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conditions',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent {
  // number: number | null = null;
  // names: string[] = ['rajnish', 'tejaswini', 'nithish', 'rubeena', 'akhila', 'chaithanya', 'avinash'];
  // odd: number[] = [];
  // factorials: number[] = [];

  // constructor() { }

  // ngOnInit(): void {
  //   this.Factorials();
  // }
  // Factorials(): void {
  //   let factorial = 1;
  //   for (let i = 1; i <= 10; i++) {
  //     factorial = factorial * (i);
  //     this.factorials.push(factorial); 
  //   }
  // }
//ngclass calls using thre methods first method is called as arrray 
//and second method is called as methods 
//and third method is called as object
// colour='';
// constructor(){}
//   changeColour(colour2:string){//by using methods
//     this.colour=colour2;
//   }
//  colour:string[]=[];//by using array
//  changeColour(color:string){
//   this.colour=[color,'bold','italic',];
//  }
//  reset(){
//   this.colour=[];
//  }
// changeRajnish(){
//   return {
//     'color': 'yellow',
//     'font-style': 'italic',
//     }
//   }
//make two buttons to change bgcolor using ngclass and ngstyle
// color1='';
// color2='';
// constructor(){}
// changebgcolorngStyle(bg1:string):void{
// this.color2=bg1;
// }
//  changebgcolorngClass(bg2:string):void{
// this.color2=bg2;
// }

}



 




  
