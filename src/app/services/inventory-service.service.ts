import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class InventoryServiceService {

  constructor(private http:Http) { }

  public saveSuppliers(supplier:any){
    console.log(supplier);
   return this.http.post(environment.host + 'suppliers',supplier );
  }
}
