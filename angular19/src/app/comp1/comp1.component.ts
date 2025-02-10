import { Component } from '@angular/core';
import { NumlistService } from '../numlist.service';

@Component({
  selector: 'app-comp1',
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {  

  list:number [] = [];
  
  constructor( private _NumlistService:NumlistService){
     
     this._NumlistService.getlsit();

  }
  
  addnum1(val:any)
  {
     this._NumlistService.addnum(val)
     this.list = this._NumlistService.getlsit();
  }

}
