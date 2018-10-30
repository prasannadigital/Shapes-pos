import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { getLocaleTimeFormat } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
userData:any;
  constructor(private spinner: NgxSpinnerService,private router: Router) { }

  ngOnInit() {
  
     sessionStorage.removeItem('backBtnInventory');
     sessionStorage.removeItem('backBtnSetup');     
     sessionStorage.removeItem('backBtnReports');     
     sessionStorage.removeItem('backBtnManager');     
     //sessionStorage.removeItem('backBtnSales');     
     //sessionStorage.removeItem('backBtnAppiontments');     
     sessionStorage.removeItem('backBtnTimeclocks');     
     sessionStorage.removeItem('backBtnShedule');//remove Back btn popup
this.getUser();
if (this.router.url == '/dashboard') {
  this.removeActiveClass();
  $(document).ready(function () {
    $("#__sale").addClass("active");
  });
}
  }
  removeActiveClass(){
    $(document).ready(function () {
      $("#__sale").removeClass("active");
      $("#__appt").removeClass("active");
      $("#__timeclock").removeClass("active");
      $("#__schedule").removeClass("active");
      $("#__reports").removeClass("active");
      $("#__manager").removeClass("active");
      $("#__inventory").removeClass("active");     
      $("#__setup").removeClass("active");  
    });
  }
  getUser(){
  if(sessionStorage){
    this.userData=JSON.parse(sessionStorage.getItem('primaryLoginData'));
    console.log(this.userData.employee_id)
  }
}
  redirectToManager() {
    this.router.navigate(['management']);
  }

  newTicket() {
    this.router.navigate(['new-ticket']);
  }

}
