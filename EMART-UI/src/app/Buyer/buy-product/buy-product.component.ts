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
  buyerform:FormGroup;
item:Items;
cart:Cart;
status:boolean;
pobj:TransactionHistory;
  constructor(private formbuilder:FormBuilder,private service:BuyerService,private route:Router) { }

  ngOnInit() {
this.buyerform=this.formbuilder.group({
  transactionType:[''],
  cardNumber:[''],
  cvv:[''],
  edate:[''],
  name:[''],
  dateTime:[''],
  numberOfItems:[''],
  remarks:['']
})
this.cart=JSON.parse(localStorage.getItem('cart'));
console.log(this.cart);
console.log(this.cart.itemId);
  }
onSubmit()
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
this.service.CheckCartItems(itemid,bid).subscribe(res=>{
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