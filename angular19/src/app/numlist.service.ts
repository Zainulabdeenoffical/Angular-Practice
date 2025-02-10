import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumlistService {
  
  list:number[]=[200]

  constructor() { }
addnum(num:number){
  this.list.push(num)
}
getlsit(){
  return this.list
}

}
