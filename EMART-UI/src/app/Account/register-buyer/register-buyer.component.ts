import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";


import { Buyer } from 'src/app/Models/buyer';
import { AccountService } from 'src/app/Services/account.service';


@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-buyer.component.html',
  styleUrls: ['./register-buyer.component.css']
})
export class RegisterBuyerComponent implements OnInit {
  registerForm:FormGroup;
  submitted=false;
id:string;
name:string;
email:string;
pwd:string;
phn:string;
list:Buyer[];
item:Buyer;
  constructor(private formbuilder:FormBuilder,private service:AccountService) { }

  ngOnInit() {
    this.registerForm=this.formbuilder.group({
     
     name:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,20}$')]],
      phn:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
     email:['',[Validators.required,Validators.email]],
      pwd:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9`!@#$%^&*()_+=]{6,15}$')]]
      
    });
  }
  onSubmit()
  {
    this.submitted=true;
    if(this.registerForm.valid){
      alert('SUCCESS!! :-)\n\n')
      console.log(JSON.stringify(this.registerForm.value));
    }
    this.Add();
}
get f()
{
  return this.registerForm.controls;
}
onReset()
{
this.submitted=false;
this.registerForm.reset();
}
Add()
{
  this.item=new Buyer();
  this.item.buyerId='B'+Math.floor(Math.random()*100);
  this.item.userName=this.registerForm.value["name"];
  this.item.password=this.registerForm.value["pwd"];
  this.item.emailId=this.registerForm.value["email"];
  this.item.mobileNo=this.registerForm.value["phn"];
this.item.createdDateTime=new Date;
  console.log(this.item);
  this.service.BuyerRegister(this.item).subscribe(res=>
    {
      console.log('Buyer Registered Successfully');
    },err=>{
    console.log(err);
      })
}
}

