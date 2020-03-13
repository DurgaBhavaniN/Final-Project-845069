import { Component, OnInit, ɵConsole } from '@angular/core';
import { Cart } from 'src/app/Models/cart';
import { Items } from 'src/app/Models/items';
import { Router } from '@angular/router';
import { BuyerService } from 'src/app/Services/buyer.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  cartlist:Cart[];
  item:Items;
  cart:Cart;
    constructor(private route:Router,private service:BuyerService) {
      if(localStorage.getItem('buyerId')){
        let bid=localStorage.getItem('buyerId');
      this.service.GetCartItems(bid).subscribe(res=>{
        this.cartlist=res;
        console.log(this.cartlist);
      })
     }
    }
    ngOnInit() {
    }
  Buy(item1:Items){
        console.log(item1);
        this.item=item1;
        localStorage.setItem('item',JSON.stringify(this.item));
        this.route.navigateByUrl('/buyer/buyproduct');
  }
  Remove(Id:string)
  {
    console.log(Id);
    this.service.RemoveCartItem(Id).subscribe(res=>{
      console.log('Item Removed from Cart');
      alert('Item Removed from Cart');
      window.location.reload();
    })
  }
 
}
