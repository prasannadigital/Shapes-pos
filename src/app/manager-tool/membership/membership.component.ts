import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globals } from '../../global/global-urls';
import { Router } from '@angular/router';
import {Membership}  from '../../model/membership.model';
import {Http} from '@angular/http';
import {Paginator} from 'primeng/paginator';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
 
  cols: any[];
  memberships:any=[]
    
  
  temp2: any[] = [];
data=new Array();

  constructor(private http: Http, private globals: Globals) { 
   
  }

  ngOnInit() {
 
    this.http.get(this.globals.api + 'memberships').subscribe(memberships=>{
      this.memberships=memberships.json();
      this.cols = [
        { field: 'membership_name', header: 'membership_name' },
        { field: 'membership_code', header: 'membership_code' },
        { field: 'membership_price', header: 'membership_price' },
        { field: 'rec_status', header: 'rec_status' }
    ];
   
    })
  }

  
 

}
