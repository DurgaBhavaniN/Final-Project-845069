import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-landing-page',
  templateUrl: './seller-landing-page.component.html',
  styleUrls: ['./seller-landing-page.component.css']
})
export class SellerLandingPageComponent implements OnInit {
  constructor(private route:Router) {
    if(!(localStorage.getItem('token1'))){
      this.route.navigateByUrl('/home');
    }
   }

  ngOnInit() {
    
  }

  Logout()
  {
    localStorage.clear();
    localStorage.removeItem('buyerId');
    localStorage.removeItem('token1');
    localStorage.removeItem('sellerId');
    this.route.navigateByUrl('/home');
  }
}
