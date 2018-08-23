import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { environment } from '../../../environments/environment';
import {StaffServiceService} from '../../services/staff-service.service';
declare var $: any;
@Component({
  selector: 'app-staff-members',
  templateUrl: './staff-members.component.html',
  styleUrls: ['./staff-members.component.css']
})
export class StaffMembersComponent implements OnInit {

  
    employee_id='';
    employee_firstname='';
    employee_lastname='';
    phone='';
    email_id='';
    employee_branch='';
    employee_address='';
    staffData:any=[];
  

  constructor(private router: Router,private service:StaffServiceService) { }

  ngOnInit() {
    this.getStaffData();
  }
  backToMembership(){
    this.router.navigate(['management']);
  }

  saveStaffMember(){
    var data:any={
      firstname:this.employee_firstname,
      lastname:this.employee_lastname,
      email:this.email_id,
      phone:this.phone,
      branch:this.employee_branch,
      address:this.employee_address
    }
    
    console.log(data)
    this.service.saveStaff(data).subscribe(response=>{
      console.log(response);
    })
    $("#exampleModal").modal('hide');
    this.employee_firstname="",
    this.employee_lastname="",
    this.phone="",
    this.email_id=""
  }

  getStaffData(){
    this.service.getStaff().subscribe(staffData=>{
      this.staffData=staffData.json();
    })
  }

  
}
