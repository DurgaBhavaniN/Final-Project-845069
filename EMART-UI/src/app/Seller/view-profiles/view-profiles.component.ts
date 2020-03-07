import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import { Seller } from 'src/app/Models/seller';
import { SellerService } from 'src/app/Services/seller.service';
@Component({
  selector: 'app-view-profiles',
  templateUrl: './view-profiles.component.html',
  styleUrls: ['./view-profiles.component.css']
})
export class ViewProfilesComponent implements OnInit {
  viewprofileForm:FormGroup;
  submitted=false;
  

item:Seller;
  constructor(private formbuilder:FormBuilder,private service:SellerService) {
    let id1=localStorage.getItem('sellerId');
  console.log(id1);
  this.service.GetProfile(id1).subscribe(res=>{
    this.item=res;
    console.log(this.item);
    this.viewprofileForm.patchValue({
      sellerId:this.item.sellerId,
      userName:this.item.userName,
      password:this.item.password,
      emailId:this.item.emailId,
      mobileNo:this.item.mobileNo,
      postalAddress:this.item.postalAddress,
      companyName:this.item.companyName,
      briefDetails:this.item.briefDetails,
      website:this.item.website,
      gstin:this.item.gstin
      
  })
})
   }

  ngOnInit() {
    this.viewprofileForm=this.formbuilder.group({
      sellerId:[''],
    userName:[''],
    password:[''],
    emailId:[''],
    mobileNo:[''],
   companyName:[''],
   gstin:[''],
   briefDetails:[''],
   postalAddress:[''],
   website:['']

    });
    //.ViewProfile();
    
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
  this.item=new Seller();
  this.item.sellerId=this.viewprofileForm.value["sellerId"];
  this.item.userName=this.viewprofileForm.value["userName"];
  this.item.password=this.viewprofileForm.value["password"];
  this.item.emailId=this.viewprofileForm.value["emailId"];
  this.item.mobileNo=this.viewprofileForm.value["mobileNo"];
this.item.postalAddress=this.viewprofileForm.value["postalAddress"];
this.item.companyName=this.viewprofileForm.value["companyName"];
this.item.briefDetails=this.viewprofileForm.value["briefDetails"];
this.item.website=this.viewprofileForm.value["website"]
this.item.gstin=this.viewprofileForm.value["gstin"];

  console.log(this.item);
  this.service.EditProfile(this.item).subscribe(res=>
    {
      console.log('Record Updated');
    })
}

}