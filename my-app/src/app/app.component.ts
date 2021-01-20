import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*export class AppComponent {
  name = 'Alisa';
  changeName()
  {
    if(this.name == "Alisa") this.name = "Vika";
    else this.name = "Alisa";
  }
}*/
export class Home {
  name = 'Сайт школьной библиотеки';
  /*changeName()
  {
    if(this.subjectOfProject == "Alisa") this.subjectOfProject = "Vika";
    else this.subjectOfProject = "Alisa";
  }*/
}

