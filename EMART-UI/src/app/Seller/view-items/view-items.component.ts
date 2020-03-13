import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import { Items } from 'src/app/Models/items';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/Services/item.service';
@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  
  viewitemsform:FormGroup;
  submitted=false;
  list:Items[];
  item:Items;
image:string;
selectedFile : File = null;
  constructor(private formbuilder:FormBuilder,private service:ItemService,private route:Router) { 
    this.service.ViewItems().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err);                                                                   
    })
    

  }
  
  ngOnInit() {
    this.viewitemsform=this.formbuilder.group({
      categoryId:[''],
      subcategoryId:[''],
      remarks:[''],
      itemId:[''],
      itemName:[''],
      price:[''],
      stockNumber:[''],
      description:[''],
      sellerId:[''],
      image:['']
     });
  }
  onSubmit()
  {
    this.submitted=true;
  
  }
get f()
{
  return this.viewitemsform.controls;
}
onReset()
{
this.submitted=false;
this.viewitemsform.reset();
}
Logout(){
  this.route.navigateByUrl('/login');
}
Delete(ItemId:string)
{
  
  this.service.DeleteItem(ItemId).subscribe(res=>
    {
      console.log("Record Deleted");
      window.location.reload();
    },err=>{
      console.log(err);                                                                   
    })
   
}

 Update()
 {
  this.item=new Items();
    this.item.sellerId=this.viewitemsform.value["sellerId"];
     this.item.categoryId=this.viewitemsform.value["categoryId"];
     this.item.subcategoryId=this.viewitemsform.value["subcategoryId"];
     this.item.itemId=this.viewitemsform.value["itemId"];
     this.item.itemName=this.viewitemsform.value["itemName"];
     this.item.price=this.viewitemsform.value["price"];
     this.item.stockNumber=this.viewitemsform.value["stockNumber"];
     this.item.remarks=this.viewitemsform.value["remarks"];
     this.item.description=this.viewitemsform.value["description"];
     this.item.image=this.viewitemsform.value["image"];
     console.log(this.item);
     this.service.UpdateItem(this.item).subscribe(res=>
       {
         console.log('Record Updated');
       })
 } 
Edit(ItemId:string)
{
 
  //let id=this.viewitemsform.value["id"];
    this.service.GetItem(ItemId).subscribe(res=>{
      this.item=res;
      console.log(this.item);
      this.viewitemsform.setValue({
        
        itemId:this.item.itemId,
        itemName:this.item.itemName,
        price:this.item.price,
        stockNumber:this.item.stockNumber,
        description:this.item.description,
        remarks:this.item.remarks,
        categoryId:this.item.categoryId,
        subcategoryId:this.item.subcategoryId,
        sellerId:this.item.sellerId,
        image:this.item.image
    })
  })
}
fileEvent(event){
  this.image=event.target.files[0].name;

}
}
