import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
  id:number;
  price:number;
  name:string;
  date;
  constructor(private route: ActivatedRoute) { 
    this.id= route.snapshot.params['id'];
    this.price=0;
    this.name= 'Ok';
    this.date='01/01/20';
  }
  

  ngOnInit(): void {
  }
  Vivod(){
    let json=localStorage.getItem("$id");
    this.name = ;
  }

}
