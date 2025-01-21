import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from "./student/student.component";

@Component({
  selector: 'app-root',
  imports: [StudentComponent],
  templateUrl: './app.component.html',
  //inline template
  //template:'<h1>Hello world</h1>',
  styleUrl: './app.component.css'
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
   //not call next event 
}
