import { Component } from '@angular/core';

@Component({
  selector: 'app-zain1',
  imports: [],
  templateUrl: './zain1.component.html',
  styleUrl: './zain1.component.css'
})
export class Zain1Component {

  setdata()
  {
  localStorage.setItem("name","Zain");

}
}