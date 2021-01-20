import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login!:string;
  password!:string;
  condition=false;
  constructor() { }
  SaveData(){
    let password = this.password;
    let login = this.login;
    
    
    if(login!="admin" && password!="admin")
    {
      if(localStorage.getItem('key')!=null){
        let i = localStorage.getItem('key');
        if (i == null) return;
        let obj1 = JSON.parse(i);
        if(password == obj1['password'] && login== obj1['login'])
        {
          this.condition=true;
          return;
        }
      }
      let obj = {login, password};
      let json = JSON.stringify(obj);
      localStorage.setItem('key', json)
    }
    else {
      this.condition=true;  
    }
  }
  ngOnInit(): void {
  }

}
