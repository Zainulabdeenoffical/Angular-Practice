import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
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
}
