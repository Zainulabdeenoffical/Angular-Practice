import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  inputs:['cdata']

})
export class EmployeeComponent {
cdata:any
}
