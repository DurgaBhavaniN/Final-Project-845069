import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import { Items } from 'src/app/Models/items';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/Services/item.service';
import { Category } from 'src/app/Models/category';
import { Subcategory } from 'src/app/Models/subcategory';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  additemForm:FormGroup;
  submitted=false;
  
  sid:string;
iid:string;
name:string;
price:string;
stk:number;
cid:string;
subid:string;
rem:string;
brief:string;
image:string;
items:Items[]=[]
categorylist:Category[];
subcategorylist:Subcategory[];
item:Items;
selectedFile : File = null;
  constructor(private formbuilder:FormBuilder,private service:ItemService,private route:Router) {
    this.service.GetCategory().subscribe(res=>{
      this.categorylist=res;
      console.log(this.categorylist);
    })
  }

  ngOnInit() {

    this.additemForm=this.formbuilder.group({
    ItemId:[''],
     ItemName:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,15}$')]],
     Price:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
     StockNumber:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
     Remarks:[''],
     Description:[''],
     CategoryId:[''],
     SubcategoryId:['']

    
  })
  }
  onSubmit()
  {
    this.submitted=true;
    if(this.additemForm.valid){
      alert('SUCCESS!! :-)\n\n')
      console.log(JSON.stringify(this.additemForm.value));
    }
    this.Add();
    
}
get f()
{
  return this.additemForm.controls;
}
onReset()
{
this.submitted=false;
this.additemForm.reset();
}
Logout(){
  this.route.navigateByUrl('/login');
}
 
Add():void  
{
  
  this.item=new Items();
  this.item.sellerId=localStorage.getItem('sellerId');
  this.item.categoryId=this.additemForm.value["CategoryId"];
  this.item.subcategoryId=this.additemForm.value["SubcategoryId"];
  this.item.itemId='I'+Math.floor(Math.random()*100);
  this.item.itemName=this.additemForm.value["ItemName"];
  this.item.price=this.additemForm.value["Price"];
  this.item.stockNumber=this.additemForm.value["StockNumber"];
  this.item.remarks=this.additemForm.value["Remarks"];
  this.item.description=this.additemForm.value["Description"];
  this.item.image=this.image;
  console.log(this.item);
  this.service.AddItem(this.item).subscribe(res=>
    {
      console.log('Item added');
    },err=>{
    console.log(err);
      })

}
fileEvent(event){
  this.image=event.target.files[0].name;

}
GetSubCategories()
  {
    let cid=this.additemForm.value["CategoryId"];
    console.log(cid);
    this.service.GetSubCategory(cid).subscribe(res=>{
      this.subcategorylist=res;
      console.log(this.subcategorylist);
    })
  }

}
