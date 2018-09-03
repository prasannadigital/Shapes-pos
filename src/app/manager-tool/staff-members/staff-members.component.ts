import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { environment } from '../../../environments/environment';
import { StaffServiceService } from '../../services/staff-service.service';
declare var $: any;
@Component({
  selector: 'app-staff-members',
  templateUrl: './staff-members.component.html',
  styleUrls: ['./staff-members.component.css']
})
export class StaffMembersComponent implements OnInit {
  firstname = '';
  lastname = '';
  phone = '';
  email = '';
  branch = '';
  address = '';
  staffData: any = [];

  constructor(private router: Router, private service: StaffServiceService) { }

  ngOnInit() {
    this.getStaffData();
  }

  backToMembership() {
    this.router.navigate(['management']);
  }

  saveStaffMember() {
    var data: any = {
      employee_firstname: this.firstname,
      employee_lastname: this.lastname,
      email_id: this.email,
      phone: this.phone,
      employee_branch: this.branch,
      employee_address: this.address
    }

    console.log(data)
    this.service.saveStaff(data).subscribe(response => {
      console.log(response);
    })
    $("#exampleModal").modal('hide');
    this.firstname = "",
      this.lastname = "",
      this.phone = "",
      this.email = ""
  }

  getStaffData() {
    this.service.getStaff().subscribe(staffData => {
      this.staffData = staffData.json();
    })
  }
}
