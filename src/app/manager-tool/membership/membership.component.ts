import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globals } from '../../global/global-urls';
import { Router } from '@angular/router';
@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
  memberships: any;
  temp2: any[] = [];

  constructor(private http: HttpClient, private globals: Globals) { 
    this.http.get(this.globals.api + 'memberships').subscribe(memberShipData => {
      console.log(memberShipData)
      this.temp2.push(memberShipData);
      this.memberships = this.temp2[0];
      console.log(this.memberships)
    });
  }

  ngOnInit() {
  }

}
