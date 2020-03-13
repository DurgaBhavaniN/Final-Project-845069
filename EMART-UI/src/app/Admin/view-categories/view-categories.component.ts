import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Category } from 'src/app/Models/category';
import { AdminService } from 'src/app/Services/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
viewcatform:FormGroup;
submitted=false;
list:Category[];
item:Category;
  constructor(private formbuilder:FormBuilder,private service:AdminService,private route:Router) {
    this.service.ViewCategories().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err);                                                                   
    })
   }

  ngOnInit() {
    this.viewcatform=this.formbuilder.group({
    categoryId:[''],
    categoryName:[''],
    briefDetails:['']
    });
  }
  onSubmit()
  {
    this.submitted=true;
  
  }

get f()
{
  return this.viewcatform.controls;
}
onReset()
{
this.submitted=false;
this.viewcatform.reset();
}
Logout(){
  this.route.navigateByUrl('/login');
}
Update()
 {
  this.item=new Category();
   
     this.item.categoryId=this.viewcatform.value["categoryId"];
     this.item.categoryName=this.viewcatform.value["categoryName"];
     this.item.briefDetails=this.viewcatform.value["briefDetails"];
     console.log(this.item);
     this.service.UpdateCategory(this.item).subscribe(res=>
       {
         console.log('Record Updated');
       })
       
 } 
  Edit(categoryId:string)
  {
   
    //let id=this.viewitemsform.value["id"];
      this.service.GetCatById(categoryId).subscribe(res=>{
        this.item=res;
        console.log(this.item);
        this.viewcatform.setValue({
          
          
          categoryId:this.item.categoryId,
          categoryName:this.item.categoryName,
      briefDetails:this.item.briefDetails
      })
    })
  }
}
