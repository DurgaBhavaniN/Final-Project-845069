import { Component, OnInit, ɵConsole } from '@angular/core';
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
item:Subcategory;
  constructor(private formbuilder:FormBuilder,private service:AdminService,private route:Router) {
   this.GetCategories();
   
   }

  ngOnInit() {
    this.viewscatform=this.formbuilder.group({
    subcategoryId:[''],
    subcategoryName:[''],
   categoryId:[''],
   
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
    this.service.ViewSubcategories(cid).subscribe(res=>{
      console.log(res);
      this.subcategorylist=res;
      console.log(this.subcategorylist);
    })
  }
  Update()
  {
    this.item=new Subcategory();
   
    this.item.subcategoryId=this.viewscatform.value["subcategoryId"];
    this.item.categoryId=this.viewscatform.value["categoryId"];

    
    this.item.subcategoryName=this.viewscatform.value["subcategoryName"];
    this.item.briefDetails=this.viewscatform.value["briefDetails"];
    this.item.gst=this.viewscatform.value["gst"];
    console.log(this.item);
    this.service.UpdateSubCategory(this.item).subscribe(res=>
      {
        console.log('Record Updated');
      })
  }
  Edit(subcategoryId:string)
  {
   console.log(subcategoryId);
    //let id=this.viewitemsform.value["id"];
      this.service.GetSCatById(subcategoryId).subscribe(res=>{
        this.item=res;
        console.log(this.item);
        this.viewscatform.setValue({
          categoryId:this.item.categoryId,
          subcategoryId:this.item.subcategoryId,
         
          subcategoryName:this.item.subcategoryName,
      briefDetails:this.item.briefDetails,
      gst:this.item.gst
      })
    })
  }
}
