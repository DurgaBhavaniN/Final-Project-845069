import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Items } from 'src/app/Models/items';
import { PurchaseHistoryComponent } from '../purchase-history/purchase-history.component';
import { TransactionHistory } from 'src/app/Models/transaction-history';
import { Cart } from 'src/app/Models/cart';
@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
  submitted=false;
  buyerform:FormGroup;
item:Items;
cart:Cart;
status:boolean;
pobj:TransactionHistory;
  constructor(private formbuilder:FormBuilder,private service:BuyerService,private route:Router) { }

  ngOnInit() {
this.buyerform=this.formbuilder.group({
  transactionType:[''],
  cardNumber:['',[Validators.required,Validators.pattern('^[0-9]{11}$')]],
  cvv:['',[Validators.required,Validators.pattern('^[0-9]{3}$')]],
  edate:['',[Validators.required,Validators.pattern('^[0-9]{2}$')]],
  name:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,15}')]],
  dateTime:['',Validators.required],
  numberOfItems:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
  remarks:['']
})
this.cart=JSON.parse(localStorage.getItem('item'));
console.log(this.cart);
console.log(this.cart.itemId);
  }
  get f()
{
  return this.buyerform.controls;
}
onSubmit()
  {
    this.submitted=true;
    if(this.buyerform.valid){
       this.Purchase();
      alert('SUCCESS!! :-)\n\n')
      console.log(JSON.stringify(this.buyerform.value));
    }
  }
Purchase()
{

  this.pobj=new TransactionHistory();
  this.pobj.id='T'+Math.round(Math.random()*999);
  this.pobj.transactionId=this.pobj.id;
  this.pobj.buyerId=localStorage.getItem('buyerId');
  this.pobj.sellerId=this.cart.sellerId;
  this.pobj.numberOfItems=this.buyerform.value["numberOfItems"];
  this.pobj.itemId=this.cart.itemId;
  this.pobj.transactionType=this.buyerform.value["transactionType"]
     this.pobj.dateTime=this.buyerform.value["dateTime"];
     this.pobj.remarks=this.buyerform.value["remarks"];
     console.log(this.pobj);
     this.service.BuyItem(this.pobj).subscribe(res=>{
       console.log("Purchase was Sucessfull");
       alert('Purchase Done Successfully');
       this.CheckItem();
     },err=>{
       alert('Please add Details');
     })
}
CheckItem()
{
let itemid=this.cart.itemId;
console.log(itemid);
let bid=localStorage.getItem('buyerId');
this.service.CheckCartItems(bid,itemid).subscribe(res=>{
  this.status=res;
  console.log(this.status);
  if(this.status==true){
    this.Delete();
  }
})
}
Delete(){
console.log(this.cart.id);
let id1=this.cart.id
this.service.RemoveCartItem(id1).subscribe(res=>{
  console.log('Cart item Removed');
})
}

}