import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import { Category } from 'src/app/Models/category';
import { AdminService } from 'src/app/Services/admin.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  addcatgForm:FormGroup;
  submitted=false;
  
  item:Category;
  
    constructor(private formbuilder:FormBuilder,private service:AdminService) { }
  
    ngOnInit() {
      this.addcatgForm=this.formbuilder.group({
       
        
       
       categoryName:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,6}$')]],
       briefDetails:['']
      })
    }
    onSubmit()
    {
      this.submitted=true;
      if(this.addcatgForm.valid){
        alert('SUCCESS!! :-)\n\n')
        console.log(JSON.stringify(this.addcatgForm.value));
      }
      this.Add();
  }
  get f()
  {
    return this.addcatgForm.controls;
  }
  onReset()
  {
  this.submitted=false;
  this.addcatgForm.reset();
  }
  Add()
  {

    this.item=new Category();
    this.item.categoryId='C'+Math.floor(Math.random()*1000);
    this.item.categoryName=this.addcatgForm.value["categoryName"];
    this.item.briefDetails=this.addcatgForm.value["briefDetails"];
    console.log(this.item);
    this.service.AddCategory(this.item).subscribe(res=>
      {
        console.log('Category added');
      },err=>{
      console.log(err);
        })
  }
  Delete()
  {
    let id1=this.addcatgForm.value["categoryName"];
    console.log(id1);
    this.service.DeleteCategory(name).subscribe(res=>{
      console.log('Category deleted');
    },err=>{
      console.log(err);
    })
     
  }
}
