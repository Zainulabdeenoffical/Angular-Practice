import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {

regForm!:FormGroup;
 constructor( private  _fb:FormBuilder)
 {


 }
 ngOnInit()
 {
  // this.regForm = new FormGroup({
  //   id: new FormControl(),
  //   fname: new FormControl(),
  //   lname : new FormControl(),
  //   email : new FormControl(),
  //   ph : new FormControl()

    // this.regForm =  this._fb.group({
    //   id: new FormControl(),
    //   fname: new FormControl(),
    //   lname : new FormControl(),
    //   email : new FormControl(),
    //   ph : new FormControl()

    this.regForm =  this._fb.group({
      id:[],
      fname:[],
      lname : [],
      email : [],
      ph : []

  })
 }

 register(Formdata:FormGroup)
 {
     console.log(this.regForm.value);
     console.log(Formdata.value);
 }


}
