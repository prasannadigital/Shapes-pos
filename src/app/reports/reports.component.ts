import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import { LoginServiceService } from '../services/login-service.service';
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
  constructor(private router: Router,private loginService: LoginServiceService) { }

  ngOnInit() {
    this.loginPopUp();
  }
  loginPopUp() {

    $('#myModal').modal('show');
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
    if (this.mailId && this.password) {
      this.loginService.saveLoginDetails(data).subscribe(loginData => {
        if (loginData.json().status == true && loginData.json().result[0].user_type_id !== 4) {
          //console.log(loginData.json().result[0])
          sessionStorage.setItem('secondaryLoginData', JSON.stringify(loginData.json().result[0]));
          $('#myModal').modal('hide');
          this.titleStyle = "visible";
        } else {
          this.errorMessage = true;
        }
      });
    }
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



}
