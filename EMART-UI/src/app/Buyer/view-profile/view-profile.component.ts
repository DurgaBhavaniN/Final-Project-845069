import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import { Buyer } from 'src/app/Models/buyer';
import { BuyerService } from 'src/app/Services/buyer.service';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  viewprofileForm:FormGroup;
  submitted=false;

item:Buyer;
  constructor(private formbuilder:FormBuilder,private service:BuyerService) { 
    
  let id1=localStorage.getItem('buyerId');
  console.log(id1);
  this.service.GetProfile(id1).subscribe(res=>{
    this.item=res;
    console.log(this.item);
    this.viewprofileForm.patchValue({
      buyerId:this.item.buyerId,
      userName:this.item.userName,
      password:this.item.password,
      emailId:this.item.emailId,
      mobileNo:this.item.mobileNo,
      createdDateTime:this.item.createdDateTime
    })
  })
  }

  ngOnInit() {
    this.viewprofileForm=this.formbuilder.group({
      buyerId:['',Validators.required],
     userName:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,6}$')]],
      mobileNo:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
     emailId:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      createdDateTime:['']
     

    });
  }
  onSubmit()
  {
    this.submitted=true;
   
}
get f()
{
  return this.viewprofileForm.controls;
}
onReset()
{
this.submitted=false;
this.viewprofileForm.reset();
}
EditProfile()
{
  this.item=new Buyer();
  this.item.buyerId=this.viewprofileForm.value["buyerId"];
  this.item.userName=this.viewprofileForm.value["userName"];
  this.item.password=this.viewprofileForm.value["password"];
  this.item.emailId=this.viewprofileForm.value["emailId"];
  this.item.mobileNo=this.viewprofileForm.value["mobileNo"];
this.item.createdDateTime=this.viewprofileForm.value["createdDateTime"];

  console.log(this.item);
  this.service.EditProfile(this.item).subscribe(res=>
    {
      console.log('Record Updated');
    })
}

}
