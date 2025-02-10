import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WelcomePipe } from './welcome.pipe';
import { ZainservicesService } from './zainservices.service';
import { Comp1Component } from "./comp1/comp1.component";
import { Comp2Component } from "./comp2/comp2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, WelcomePipe,Comp1Component,Comp2Component],
  // template URL high priority
  templateUrl: './app.component.html',
  // inline template
  // template:'<h1>Hello world</h1>',
  styleUrls: ['./app.component.css'],
  // InLine CSS
  // inline css high priority
  // styles:'h1{background-color:yellow;}'
  // Styles urls for multiple styles 
  // not call next event 
  // preserveWhitespaces is used for the same as its HTML structure
  // if true
  // remembered default structure show 
  // preserveWhitespaces: true
  // preserveWhitespaces: false
  // Emulated encapsulation not transferred css
  // not parent css to child not child to parent
  // encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.ShadowDom
  // shadow dom is transferred css from parent to child
  // but not child to parent
  // encapsulation: ViewEncapsulation.None
  // Transferred css for child to parent
  // parent to child both 
})
export class AppComponent {
  title = 'angular19';
  name = "Zain";
  login = true;
  age = 20;
  _message = "Hello world";
  zain = "hello i am zain "

  logins() {
    this.login = true;
  }
  logout() {
    this.login = false;
  }
  Employee: any[] = [
    { id: 1, name: "Zain" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Ahmad" }
  ];

  EmployeeCountry: any[] = [
    { id: 1, name: "Zain", country: 'Pakistan' },
    { id: 2, name: "Ali", country: 'India' },
    { id: 3, name: "Ahmad", country: 'USA' },
  ];
  

  getcolor(country: any) {
    switch (country) {
      case 'Pakistan':
        return 'green';
      case 'India':
        return 'red';
      case 'USA':
        return 'blue';
    }
    return null;
  }
  country:any[]=[
    {id:1,name:'Pakistan'},
    {id:2,name:'India'},
    {id:3,name:'USA'},

  ];
  col = 2;
  color = "red";
  classtoapply = "boldclass";

  reg = "FA22-BCS-090"


  imagepath = "udemy.png"

  valuenow = true;

  // enable()
  // {
  //   this.valuenow = !this.valuenow;
  // }


  // click1()
  // {
  //   console.log("click fired!");
  // }

  // sentmessage(val:any)
  // {
  //   this._message=val;
  // }


  myinfo =    {Name:"M Zain Ul Abideen",
      Age: 20,
      Address: "Sahiwal"
    }

    curr = 100;

//     currentdate = new Date();

//   data1:string;

// constructor (private zainService: ZainservicesService){
// this.data1=this.zainService.myservices();
//     }
  
}
