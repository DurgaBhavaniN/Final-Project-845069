import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import { AccountService } from 'src/app/Services/account.service';
import { Token } from 'src/app/Models/token';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private route:Router) { }

  ngOnInit() {
    
  }
  
Shop()
{
  this.route.navigateByUrl('/login');
}
}
