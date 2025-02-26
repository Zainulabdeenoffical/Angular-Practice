import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  index: number = 0; // Added index property for template usage and initialized it

regForm!:any;
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
      // ph : ['',[Validators.required]]

    phonenumber: new FormArray([
      new FormControl('', Validators.required),
    ])

  })
 
  // this.regForm.get('email')?.valueChanges.subscribe(first_name=>
  
  //   {
  //     console.log('first name current  value is '+first_name)
  //   }
  
  // )

    // this.regForm.valueChanges.subscribe(FormData=>{
    //   console.log("first name is" +FormData.fname)
    //   console.log("last name is" +FormData.lname)
    //   console.log("email is" +FormData.email)
    //   console.log("phone number is" +FormData.ph)

    // })

// this.regForm.statusChanges.subscribe(firstnamestatuscheck=>{
//   console.log("first name status is "+firstnamestatuscheck)
// })

// this.regForm.statusChanges.subscribe(fromdata=>{
//   console.log("full form  Status check : "+fromdata)
// })

let arr = new FormArray([
  new FormControl('M Zain Ul Abideen'),
  new FormControl('zzzz'),

])
console.log(arr.value)
console.log(arr.valid)

// after result values in array
arr.reset()
console.log(arr.value)
console.log(arr.valid)

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

 setdata()
 {
  // this.regForm.setValue(
  //   {
  //     id:100,
  //     fname:'Zain',
  //     lname:'Ul Abideen',
  //     email:'zu4425@gmail.com',
  //     ph:"03258509789"
  //   }
  // )
  this.regForm.patchValue(
    {
      //id:100,
      fname:'Zain',
      lname:'Ul Abideen',
      email:'zu4425@gmail.com',
      ph:"03258509789"
    }
  )
 }

 deletbtn(val:any)
 {

   this.regForm.get('phonenumber').removeAt('val');

 }

 addmore()
 {

this.regForm.get('phonenumber').push( new FormData());


 }

}
