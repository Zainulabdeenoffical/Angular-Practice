import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login(userid:any , passwordid:any) {
  {
   if (userid == "zain" && passwordid == "zain")
  {
      sessionStorage.setItem("islogined","true")
  }
  else{
    sessionStorage.setItem("islogined","false")
  }

}}}
