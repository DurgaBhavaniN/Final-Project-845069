import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import { Category } from '../Models/category';
import { Subcategory } from '../Models/subcategory';

const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization':'Bearer'+localStorage.getItem('token')
})}
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url:string='http://localhost:52839/Admin/'
  constructor(private http:HttpClient) { }
  public AddCategory(obj:Category):Observable<any>
  {
    return this.http.post<any>(this.url+'AddCategory',JSON.stringify(obj),Requestheaders);
  }
  public AddSubCategory(obj:Subcategory):Observable<any>
  {
    return this.http.post<any>(this.url+'AddSubCategory',JSON.stringify(obj),Requestheaders);
  }
  public DeleteCategory(id:string):Observable<any>
  {
    return this.http.delete<any>(this.url+'DeleteCategory/'+id,Requestheaders);
  }
  public DeleteSubCategory(id:string):Observable<any>
  {
    return this.http.delete<any>(this.url+'DeleteSubCategory/'+id,Requestheaders);
  }
  public GetCategory():Observable<Category[]>
  {
    return this.http.get<Category[]>(this.url+'GetCategory',Requestheaders);
  }
  public GetSubCategory(id:string):Observable<Subcategory[]>
  {
    return this.http.get<Subcategory[]>(this.url+'GetSubCategory/'+id,Requestheaders);
  }
  public ViewCategories():Observable<Category[]>
{
  return this.http.get<Category[]>(this.url+'ViewCategories',Requestheaders);
}
public ViewSubcategories(cid:string):Observable<any>
{
  return this.http.get<any>(this.url+'ViewSubcategories/'+cid,Requestheaders);
}
public GetCatById(id:string):Observable<Category>
{
  return this.http.get<Category>(this.url+'GetCatById/'+id,Requestheaders);
}
public GetSCatById(id:string):Observable<any>
{
  return this.http.get<any>(this.url+'GetSCatById/'+id,Requestheaders);
}
public UpdateCategory(item:Category):Observable<any>
{
  return this.http.put<any>(this.url+'UpdateCategory',JSON.stringify(item),Requestheaders);
}
public UpdateSubCategory(item:Subcategory):Observable<any>
{
  return this.http.put<any>(this.url+'UpdateSubCategory',JSON.stringify(item),Requestheaders);
}
}
