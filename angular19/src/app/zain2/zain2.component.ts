import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-zain2',
  imports: [],
  templateUrl: './zain2.component.html',
  styleUrl: './zain2.component.css'
})
export class Zain2Component {
  // getdata()
  // {
  //   console.log(localStorage.getItem("name"))
  // console.log(localStorage.getItem("Zain"))
  // }

  constructor( private _cookies: CookieService) 
  {


   }
   getcookies()
   {
    console.log(this._cookies.get('username'))
    console.log(this._cookies.get('empid'))

   }



}
