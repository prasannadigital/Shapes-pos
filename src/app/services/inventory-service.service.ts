import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class InventoryServiceService {

  constructor(private http: Http) { }

  public saveSuppliers(supplier: any) {
    return this.http.post(environment.host + 'suppliers', supplier);
  }
 public getSuppliers(){
   return this.http.get(environment.host + 'suppliers');
 }
public getSelectedSupplier(id:any){
  return this.http.get(environment.host + 'suppliers/' +id);
}
} 
