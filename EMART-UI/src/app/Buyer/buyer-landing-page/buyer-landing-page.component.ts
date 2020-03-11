import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Items } from 'src/app/Models/items';

@Component({
  selector: 'app-buyer-landing-page',
  templateUrl: './buyer-landing-page.component.html',
  styleUrls: ['./buyer-landing-page.component.css']
})
export class BuyerLandingPageComponent implements OnInit {
  list:Items[];
  count:number;
  user:string;
  constructor(private route:Router,private service:BuyerService) {
    if(!(localStorage.getItem('token'))){
      this.route.navigateByUrl('/home');
    }

    let bid=localStorage.getItem('buyerId');
    this.service.GetCount(bid).subscribe(res=>{
      this.count=res;
      console.log(this.count);
    })
   }
  
  
  ngOnInit() {
    
  }

  Logout()
  {
    localStorage.clear();
    localStorage.removeItem('buyerId');
    localStorage.removeItem('token');
    localStorage.removeItem('sellerId');
    this.route.navigateByUrl('/home');
  }
}