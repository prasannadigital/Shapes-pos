import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManagerServiceService {

  constructor(private http:Http) { }
 public getManager(){
return  this.http.get(environment.host+ 'categorys')
  }
}
