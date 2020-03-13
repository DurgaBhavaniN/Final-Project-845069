import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import { Seller } from 'src/app/Models/seller';
import { AccountService } from 'src/app/Services/account.service';
@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.css']
})
export class RegisterSellerComponent implements OnInit {
  registerForm:FormGroup;
  submitted=false;
id:string;
name:string;
email:string;
pwd:string;
phn:string;
add:string;
cmpn:string;
gst:string;
bri:string;
web:string;
list:Seller[];
item:Seller;

  constructor(private formbuilder:FormBuilder,private service:AccountService) { }

  ngOnInit() {
    this.registerForm=this.formbuilder.group({
      id:[''],
      name:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,20}$')]],
      phn:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
     email:['',[Validators.required,Validators.email]],
     pwd:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9`!@#$%^&*()_+=]{6,15}$')]],
      add:['',Validators.required],
      cmpn:['',Validators.required,Validators.pattern('^[a-zA-Z]{3,150}$')],
      gst:['',Validators.required,Validators.pattern('^[0-9]{5}$')],
      bri:['',],
      web:['']

    });
  }
  onSubmit()
  {
    this.submitted=true;
    if(this.registerForm.valid){
      alert('Registration Success!! :-)\n\n')
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
  this.item=new Seller();
  this.item.sellerId='S'+Math.round(Math.random()*999);
  this.item.userName=this.registerForm.value["name"];
  this.item.password=this.registerForm.value["pwd"];
  this.item.emailId=this.registerForm.value["email"];
  this.item.mobileNo=this.registerForm.value["phn"];
this.item.postalAddress=this.registerForm.value["add"];
this.item.companyName=this.registerForm.value["cmpn"];
this.item.gstin=this.registerForm.value["gst"];
this.item.briefDetails=this.registerForm.value["bri"];
this.item.website=this.registerForm.value["web"];
  console.log(this.item);
  this.service.SellerRegister(this.item).subscribe(res=>
    {
      console.log('Seller Registered Successfully');
    },err=>{
    console.log(err);
      })
}
}
