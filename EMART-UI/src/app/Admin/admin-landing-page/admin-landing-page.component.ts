import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.css']
})
export class AdminLandingPageComponent implements OnInit {

  constructor(private route:Router) {
    if(!(localStorage.getItem('token'))){
      this.route.navigateByUrl('/home');
    }
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
