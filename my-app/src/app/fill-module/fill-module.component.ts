import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fill-module',
  templateUrl: './fill-module.component.html',
  styleUrls: ['./fill-module.component.css']
})
export class FillModuleComponent implements OnInit {
  id:number;
  price:number;
  name:string;
  date:number;
  //obj:Array<number>;
  constructor() {
    this.id=0;
    this.price=0;
    this.name='';
    this.date=0;
   }
 
  
  SaveData() {
    
    let obj=[this.id, this.price, this.name, this.date];
    let json = JSON.stringify(obj)
    localStorage.setItem("$id", json)
  }
  ngOnInit(): void {
  }

}
