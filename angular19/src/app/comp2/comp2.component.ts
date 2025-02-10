import { Component } from '@angular/core';
import { NumlistService } from '../numlist.service';

@Component({
  selector: 'app-comp2',
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component {
 list:number [] = [];
  
  constructor( private  NumlistService:NumlistService ) { }

  
  addnum1(val:any)
  {
     this.NumlistService.addnum(val)
     this.list = this.NumlistService.getlsit()
  }
}
