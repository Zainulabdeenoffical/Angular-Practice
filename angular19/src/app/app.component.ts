import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from "./student/student.component";

@Component({
  selector: 'app-root',
  imports: [StudentComponent],
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
})
export class AppComponent {
  title = 'angular19';
   name = "Zain";

   constructor (){
    console.log("App Component Constructor");
   }

   //HostListner
   @HostListener('click',['$event'])
   //only call next event 
   show(){
    alert('Hello Zain');
   }
   
}
