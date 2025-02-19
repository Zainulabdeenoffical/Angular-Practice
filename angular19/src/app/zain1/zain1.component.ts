import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-zain1',
  imports: [],
  templateUrl: './zain1.component.html',
  styleUrl: './zain1.component.css'
})
export class Zain1Component {

//   setdata()
//   {
//   localStorage.setItem("name","Zain");

// }

constructor( private _cookie: CookieService)
{
  
  _cookie.set("username","zu4425")

}
setcookies()
{
  this._cookie.set("empid","1234")
}

}