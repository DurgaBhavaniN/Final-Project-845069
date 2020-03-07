import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import { AdminService } from 'src/app/Services/admin.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { Subcategory } from 'src/app/Models/subcategory';

@Component({
  selector: 'app-view-subategories',
  templateUrl: './view-subategories.component.html',
  styleUrls: ['./view-subategories.component.css']
})
export class ViewSubategoriesComponent implements OnInit {
viewscatform:FormGroup;
submitted=false;
subcategorylist:Subcategory[];
categorylist:Category[];
  constructor(private formbuilder:FormBuilder,private service:AdminService,private route:Router) {
   this.GetCategories();
   this.service.ViewSubcategories().subscribe(res=>{
    this.subcategorylist=res;
    console.log(this.subcategorylist);
  },err=>{
    console.log(err);                                                                   
  })
   }

  ngOnInit() {
    this.viewscatform=this.formbuilder.group({
    subcategoryId:[''],
    subcategoryName:[''],
   categoryId:[''],
    categoryName:[''],
  briefDetails:[''],
    gst:[''],

  })
  }
  get f()
  {
    return this.viewscatform.controls;

  }
  GetCategories()
  {
    this.service.GetCategory().subscribe(res=>
     {
       this.categorylist=res;
       console.log(this.categorylist);
     },
     err=>
     {
       console.log(err);
     })
   }
   GetSubCategories()
  {
    let cid=this.viewscatform.value["categoryId"];
    console.log(cid);
    this.service.GetSubCategory(cid).subscribe(res=>{
      this.subcategorylist=res;
      console.log(this.subcategorylist);
    })
  }
}
