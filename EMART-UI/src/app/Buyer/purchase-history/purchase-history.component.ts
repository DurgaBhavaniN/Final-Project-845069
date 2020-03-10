import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Router } from '@angular/router';
import { TransactionHistory } from 'src/app/Models/transaction-history';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {
  thlist:TransactionHistory[];
  constructor(private service:BuyerService,private route:Router) { 
    let bid=localStorage.getItem('buyerId');
    this.service.GetPurchaseHistory(bid).subscribe(res=>{
      this.thlist=res;
      console.log(this.thlist);
    })
  }
  ngOnInit() {
  }

}
