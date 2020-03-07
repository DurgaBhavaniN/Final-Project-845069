import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import { Items } from '../Models/items';
import { Category } from '../Models/category';
import { Subcategory } from '../Models/subcategory';

const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization':'Bearer'+localStorage.getItem('token')
})}
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url:string='http://localhost:52839/Item/'
  constructor(private http:HttpClient) { }
public AddItem(item:Items):Observable<any>
{
  return this.http.post<any>(this.url+'AddItem',JSON.stringify(item),Requestheaders);
}
public ViewItems():Observable<Items[]>
{
  return this.http.get<Items[]>(this.url+'ViewItems',Requestheaders);
}
public UpdateItem(item:Items):Observable<any>
{
  return this.http.put<any>(this.url+'UpdateItem',JSON.stringify(item),Requestheaders);
}
public DeleteItem(itemid:string):Observable<any>
{
  return this.http.delete<any>(this.url+'DeleteItem/'+itemid,Requestheaders);
}
public GetItem(id:string):Observable<Items>
{
  return this.http.get<Items>(this.url+'GetItem/'+id,Requestheaders);
}
public GetCategory():Observable<Category[]>
  {
    return this.http.get<Category[]>(this.url+'GetCategory',Requestheaders);
  }
  public GetSubCategory(id:string):Observable<Subcategory[]>
  {
    return this.http.get<Subcategory[]>(this.url+'GetSubCategory/'+id,Requestheaders);
  }
}
