import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Membership}  from '../../model/membership.model';
import {Http} from '@angular/http';
import {Paginator} from 'primeng/paginator';
import { MembershipServiceService} from '../../services/membership-service.service';

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
  catagroyData = new Array();
  constructor(private router: Router,private http: Http,private service: MembershipServiceService) {}

  ngOnInit() {

 
    this.service.getMembership().subscribe(memberships=>{
      this.memberships=memberships.json();
      this.cols = [
        { field: 'membership_name', header: 'membership_name' },
        { field: 'membership_code', header: 'membership_code' },
        { field: 'membership_price', header: 'membership_price' },
        { field: 'rec_status', header: 'rec_status' }
    ];
   
    })
  }
  backToMembership(){
    this.router.navigate(['management']);
  }
  
 

}
