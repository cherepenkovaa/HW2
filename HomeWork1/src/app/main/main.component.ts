import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  country!:string;
  city!:string;
  objects!:string[];
  constructor() { }

  ngOnInit(): void {
  }
  SaveData(){
    let country = this.country;
    let city = this.city;
    let obj = {country, city};
    let json = JSON.stringify(obj);
    localStorage.setItem('data', json);
    let j = localStorage.getItem('data');
    if (j == null) return;
    let obj1 = JSON.parse(j);
    this.objects = [ obj1['country'], obj1['city'] ]; 
  }
}
