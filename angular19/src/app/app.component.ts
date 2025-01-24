import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from "./student/student.component";
import { EmployeeComponent } from "./employee/employee.component";

@Component({
  selector: 'app-root',
  imports: [EmployeeComponent],
  // templaet url high pioraty
  templateUrl: './app.component.html',
  //inline template
  //template:'<h1>Hello world</h1>',
  styleUrl: './app.component.css',
  // InLine CSS
  //inline css high pioraty
  //styles:'h1{background-color:yellow;}'
  //Styles urls for multiplle styles 
 // styleUrls:[]
 //not call next event 
   //preservewhitespacces is used for same as it html structure
   // if true
   // rembered deafult strutchure show 
   //preserveWhitespaces: true
   //preserveWhitespaces: false
   //Emulated encapsualtion not transfered css
   //  not parent css to child not child to parent
   //encapsulation:ViewEncapsulation.Emulated
   // encapsulation:ViewEncapsulation.ShadowDom
    // shadow down is transfered css from parent to child
    // but not child to parent
      //encapsulation: ViewEncapsulation.None
    // Transfered css for child  to parent
    // parent to child both 
    
})
export class AppComponent {
  title = 'angular19';
   name = "Zain";

  //  constructor (){
  //   console.log("App Component Constructor");
  //  }

   //HostListner
  //  @HostListener('click',['$event'])
  //  //only call next event 
  //  show(){
  //   alert('Hello Zain');
  //  }
  cdata:any
  getdata(data:any)
  {
     this.cdata=data;
  }
   
}
