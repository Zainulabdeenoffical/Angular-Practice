import { Component } from '@angular/core';

@Component({
  selector: 'app-zain2',
  imports: [],
  templateUrl: './zain2.component.html',
  styleUrl: './zain2.component.css'
})
export class Zain2Component {
  getdata()
  {
    console.log(localStorage.getItem("name"))
  console.log(localStorage.getItem("Zain"))
  }

}
