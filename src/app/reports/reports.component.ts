import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import { LoginServiceService } from '../services/login-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  password = "";
  mailId = "";
  staffContent = false;
  salesContent = false;
  clientsContent = false;
  paymentContent = false;
  inventoryContent = false;
  errorMessage = false;
  titleStyle = "hidden";
  loginStyle="visible"
  loginTest: any = {
    'user_type_id': ''
  };
  btnDisable=true;
  model: any = {};
  constructor(private spinner: NgxSpinnerService,private router: Router, private loginService: LoginServiceService) { }

  ngOnInit() {
    this.loginPopUp();
     sessionStorage.removeItem('backBtnInventory');     
     sessionStorage.removeItem('backBtnSetup');     
     //sessionStorage.removeItem('backBtnReports');     
     sessionStorage.removeItem('backBtnManager');     
    // sessionStorage.removeItem('backBtnSales');     
    // sessionStorage.removeItem('backBtnAppiontments');     
     sessionStorage.removeItem('backBtnTimeclocks');     
     sessionStorage.removeItem('backBtnShedule');//remove Back btn popup
  }
  loginPopUp() {

    if(sessionStorage.backBtnReports){
      $('#myModal').modal('hide');
      this.titleStyle = "visible";
    }
    
      else{
        $('#myModal').modal('show');
      }
  }
  // backToDashboard(){
  //   this.router.navigate(['dashboard']);
  // }
  onSubmit() {
    if (sessionStorage.secondaryLoginData) {
      window.sessionStorage.removeItem('secondaryLoginData');
      //console.log('secondaryLoginData')
    }
    this.spinner.show();
    if (this.model.email_id && this.model.password) {
      this.loginService.saveLoginDetails(this.model).subscribe(loginData => {
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
          sessionStorage.setItem('backBtnReports', 'Y');
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
  }
  RedirectToHome() {
    this.router.navigate(['dashboard']);
  }
  showStaffContent() {
    this.staffContent = true;
    this.salesContent = false;
    this.clientsContent = false;
    this.paymentContent = false;
    this.inventoryContent = false;
  }
  showSalesContent() {
    this.salesContent = true;
    this.staffContent = false;
    this.clientsContent = false;
    this.paymentContent = false;
    this.inventoryContent = false;
  }

  showClientsContent() {
    this.clientsContent = true;
    this.staffContent = false;
    this.salesContent = false;
    this.paymentContent = false;
    this.inventoryContent = false;
  }

  showPaymentContent() {
    this.paymentContent = true;
    this.clientsContent = false;
    this.staffContent = false;
    this.salesContent = false;
    this.inventoryContent = false;
  }

  showInventoryContent() {
    this.inventoryContent = true;
    this.paymentContent = false;
    this.clientsContent = false;
    this.staffContent = false;
    this.salesContent = false;
  }
  commissionClick() {
    this.router.navigate(['staff/commission'])
  }

  payRollClick() {
    this.router.navigate(['staff/pay-roll'])
  }
  scheduleAtClick() {
    this.router.navigate(['staff/schedule-at-glance'])
  }
  timeClockClick() {
    this.router.navigate(['staff/time-clock'])
  }
  ratingsAndReviews() {
    this.router.navigate(['staff/ratings-and-reviews'])
  }
  tipsClick() {
    this.router.navigate(['staff/tips']);
  }
  cancellationsClick() {
    this.router.navigate(['staff/cancellations'])
  }
  scheduleClick() {
    this.router.navigate(['staff/schedule']);
  }

  phoneBookClick() {
    this.router.navigate(['staff/phone-book']);
  }

  performanceClick() {
    this.router.navigate(['staff/performance']);
  }
  clientPerClick() {
    this.router.navigate(['staff/client-per-stylist']);
  }

  appointmentClick() {
    this.router.navigate(['staff/appointment-metrics']);
  }

  payRatesClick() {
    this.router.navigate(['staff/pay-rates']);
  }
  approvedClick(){
    this.router.navigate(['payment/approved-transactions']);
  }
  autopayDetailsClick(){
    this.router.navigate(['payment/autopay-detail']);
  }
  settledClick(){
    this.router.navigate(['payment/settled-transaction']);
  }
  autopaySummeryClick(){
    this.router.navigate(['payment/autopay-summary']);
  }
  pendingClick(){
    this.router.navigate(['payment/pending-transaction']);
  }
rejectedClick(){
  this.router.navigate(['payment/rejected-transaction']);
}
expirationClick(){
  this.router.navigate(['payment/autopay-expirations']);
}
autopayCcClick(){
  this.router.navigate(['payment/autopay-cc-expirations']);
}
slaesClick(){
  this.router.navigate(['sales/sales-sales']);
}
Click2(){
  this.router.navigate(['sales/daily-discounts']);
}
Click3(){
  this.router.navigate(['ssales/cash-drawer']);
}
Click4(){
  this.router.navigate(['sales/sales-by-service']);
}
Click5(){
  this.router.navigate(['sales/sales-by-catagory']);
}
Click6(){
  this.router.navigate(['sales/sales-by-product']);
}
Click7(){
  this.router.navigate(['sales/sales-by-rep']);
}
Click8(){
  this.router.navigate(['sales/sales-by-giftcards']);
}
Click9(){
  this.router.navigate(['sales/attence-with-revenue']);
}
Click10(){
  this.router.navigate(['sales/sales-by-supliers']);
}
Click11(){
  this.router.navigate(['sales/manage-online-orders']);
}
Click12(){
  this.router.navigate(['sales/invoice-sales']);
}
Click13(){
  this.router.navigate(['sales/earned-revenue']);
}
}
