import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZainservicesService {
  static getmeesages(): string {
    throw new Error('Method not implemented.');
  }

  _messsage = 'Hello from service';
  constructor() { }

getmeesages(){
    return this._messsage;
  }
}
