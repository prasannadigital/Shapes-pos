import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { getLocaleTimeFormat } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
userData:any;
  constructor(private spinner: NgxSpinnerService,private router: Router) { }

  ngOnInit() {
    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 3000);
  
     sessionStorage.removeItem('backBtnInventory');
     sessionStorage.removeItem('backBtnSetup');     
     sessionStorage.removeItem('backBtnReports');     
     sessionStorage.removeItem('backBtnManager');     
     //sessionStorage.removeItem('backBtnSales');     
     //sessionStorage.removeItem('backBtnAppiontments');     
     sessionStorage.removeItem('backBtnTimeclocks');     
     sessionStorage.removeItem('backBtnShedule');//remove Back btn popup
this.getUser();
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
