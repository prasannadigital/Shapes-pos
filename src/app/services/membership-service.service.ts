import { Injectable } from '@angular/core';
import {Membership} from '../model/membership.model';
import {Http} from '@angular/http';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MembershipServiceService {

  constructor(private http:Http) { }
  getMembership(){
    return this.http.get(environment.host+'memberships')
  }
}
