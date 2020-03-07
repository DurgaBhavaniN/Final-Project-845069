import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import { Buyer } from '../Models/buyer';
import { Items } from '../Models/items';
import { TransactionHistory } from '../Models/transaction-history';

const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization':'Bearer'+localStorage.getItem('token')
})}
@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  url:string='http://localhost:52839/Buyer/'
 
  constructor(private http:HttpClient) { }
  public EditProfile(buyer:Buyer):Observable<any>
  {
    return this.http.put<any>(this.url+'EditProfile',JSON.stringify(buyer),Requestheaders);
  }
  public GetProfile(id:string):Observable<Buyer>
  {
    return this.http.get<Buyer>(this.url+'ViewProfile/'+id,Requestheaders);
  } 
  public SearchItems(name:string):Observable<Items[]>
  {
    return this.http.get<Items[]>(this.url+'SearchItem/'+name,Requestheaders);
  }
  public BuyItem(obj:TransactionHistory):Observable<TransactionHistory[]>{

    return this.http.post<TransactionHistory[]>(this.url+'BuyItem',obj,Requestheaders);
  }
}
  