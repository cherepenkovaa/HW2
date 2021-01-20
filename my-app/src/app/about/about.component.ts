import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name:string="Контрольная работа 1, Черепенкова Алиса, помощь по Ангуляру немного нужна, путаюсь до сих пор. Проект в стадии верстки страниц и подключение админки к нему";
  constructor() { }

  ngOnInit(): void {
  }

}
