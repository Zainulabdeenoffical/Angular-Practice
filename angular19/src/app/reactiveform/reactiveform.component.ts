import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
      fname:['',[ Validators.required]],
      lname : ['',[ Validators.required]],
      email : ['' ,[Validators.required,Validators.email]],
      ph : ['',[Validators.required]]

  })
 }

 register(Formdata:FormGroup)
 {
    console.log(this.regForm.valid)
     console.log(this.regForm.value);
     console.log(Formdata.value);
     console.log(this.regForm.get('lname')?.value)
 }

 rest()
 {
  // this.regForm.reset();
  this.regForm.reset({
   lname: this.regForm.get('lname')?.value
  })
 }


}
