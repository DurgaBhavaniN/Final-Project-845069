import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";

@Component({
  selector: 'app-block-unblock-buyer',
  templateUrl: './block-unblock-buyer.component.html',
  styleUrls: ['./block-unblock-buyer.component.css']
})
export class BlockUnblockBuyerComponent implements OnInit {
buForm:FormGroup;
submitted=false;
id:string;
name:string;
constructor(private formbuilder:FormBuilder) { }

ngOnInit() {
  this.buForm=this.formbuilder.group({
   
    id:['',Validators.required],
    name:['',Validators.required]
  });
  }
  onSubmit()
  {
    this.submitted=true;
    if(this.buForm.valid){
      alert('SUCCESS!! :-)\n\n')
      console.log(JSON.stringify(this.buForm.value));
    }
}
get f()
{
  return this.buForm.controls;
}
onReset()
{
this.submitted=false;
this.buForm.reset();
}
}
