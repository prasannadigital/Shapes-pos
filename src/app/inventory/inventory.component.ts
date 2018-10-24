import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import { Location } from '@angular/common';
import { LoginServiceService } from '../services/login-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  password = "";
  mailId = "";
  errorMessage=false;
  btnDisable=true;
  loginTest:any;
  titleStyle="hidden";
  constructor(private spinner: NgxSpinnerService,private router: Router, private _location: Location, private loginService: LoginServiceService) { }
  ngOnInit() {
    //sessionStorage.removeItem('backBtnInventory');
    sessionStorage.removeItem('backBtnSetup');     
    sessionStorage.removeItem('backBtnReports');     
    sessionStorage.removeItem('backBtnManager');     
    //sessionStorage.removeItem('backBtnSales');     
    //sessionStorage.removeItem('backBtnAppiontments');     
    sessionStorage.removeItem('backBtnTimeclocks');     
    sessionStorage.removeItem('backBtnShedule');
    //remove Back btn popup
    this.loginPopUp();
    if (sessionStorage.getItem('inventory-routing') == '"purchase"') {
      this.purchaseOrderClick()
    } else if (sessionStorage.getItem('inventory-routing') == '"supplier"') {
      console.log("click here");
      this.supplierClick();
    } else if (sessionStorage.getItem('inventory-routing') == '"inventory"') {
      this.inventoryTicketClick();
    } else if (sessionStorage.getItem('inventory-routing') == '"update"') {
      this.updateInventory();
    } else if (sessionStorage.getItem('inventory-routing') == '"reports"') {
      this.reportsClick();
    }
  }
  loginPopUp() {
if(sessionStorage.backBtnInventory){
  $('#myModal').modal('hide');
  this.titleStyle = "visible";
}

  else{
    $('#myModal').modal('show');
  }
    
  }

  loginSubmite() {
    if (sessionStorage.secondaryLoginData) {
      window.sessionStorage.removeItem('secondaryLoginData');
      //console.log('secondaryLoginData')
    }
    var data = {
      password: this.password,
      email_id: this.mailId
    }
    this.spinner.show();
    if (this.mailId && this.password) {
      this.loginService.saveLoginDetails(data).subscribe(loginData => {
        if (loginData.json().status == false) {
          this.errorMessage = true;
          this.spinner.hide();
        }
        this.loginTest = loginData.json().result[0];
        console.log(this.loginTest);
        console.log(this.loginTest.user_type_id);

        if (loginData.json().status == true && this.loginTest.user_type_id !== 4) {
          //console.log(loginData.json().result[0])
          sessionStorage.setItem('secondaryLoginData', JSON.stringify(loginData.json().result[0]));
          sessionStorage.setItem('backBtnInventory', 'Y');
          $('#myModal').modal('hide');
          this.titleStyle = "visible";
          this.spinner.hide();
        } else {
          this.errorMessage = true;
          this.spinner.hide();
        }
      });
    }
  }
  errorClear(){
    this.errorMessage = false;
    if(this.password && this.mailId){
      this.btnDisable=false;
    }
    else{
      this.btnDisable=true;
    }
  }
  RedirectToHome() {
    this.router.navigate(['dashboard']);
  }
 
  redirectToOrder() {
    this.router.navigate(['inventory/purchase-order']);
  }
  redirectToSupplier() {
    this.router.navigate(['inventory/suppliers']);
  }
  redirectToInventory() {
    this.router.navigate(['inventory/inventory-tickets']);
  }
  redirectToUpdate() {
    this.router.navigate(['inventory/physical-inventory']);
  }
  redirectToReportsInventory() {
    this.router.navigate(['inventory/reports']);
  }
  purchaseOrderClick() {
    sessionStorage.setItem('inventory-routing', JSON.stringify("purchase"));
    $(".purchase-order").trigger("click");
    this.removeClass();
    $(".purchase-order").addClass("active");

  }
  supplierClick() {
    sessionStorage.setItem('inventory-routing', JSON.stringify("supplier"));
    $(".supplier-info").trigger("click");
    this.removeClass();
    $(".supplier-info").addClass("active");
  }
  inventoryTicketClick() {
    sessionStorage.setItem('inventory-routing', JSON.stringify("inventory"));
    $(".inventory-info").trigger("click");
    this.removeClass();
    $(".inventory-info").addClass("active");

  }
  updateInventory() {
    sessionStorage.setItem('inventory-routing', JSON.stringify("update"));
    $(".update-info").trigger("click");
    this.removeClass();
    $(".update-info").addClass("active");
  }
  reportsClick() {
    sessionStorage.setItem('inventory-routing', JSON.stringify("reports"));
    $(".reports-info").trigger("click");
    this.removeClass();
    $(".reports-info").addClass("active");

  }
  removeClass() {
    $(".purchase-order").removeClass("active");
    $(".supplier-info").removeClass("active");
    $(".inventory-info").removeClass("active");
    $(".update-info").removeClass("active");
    $(".reports-info").removeClass("active");

  }
}
