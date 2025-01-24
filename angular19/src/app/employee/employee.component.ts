import { Component,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  inputs:['cdata'],
  outputs:['childevent']

})
export class EmployeeComponent {
cdata:any

childevent = new EventEmitter();

senddata(val:any)
{
//console.log(val)
this.childevent.emit(val)
}
}
