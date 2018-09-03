import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globals } from '../global/global-urls';
import { environment } from '../../environments/environment';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  password = "";
  mailId = "";

  alerts: any[] = [];
  loginData: any = {
    'status': '',
    'userData': ''
  }

  constructor(private http: HttpClient, private router: Router, private globals: Globals) {
    console.log(this.router.url);
    if (this.router.url == '/appointments') {
      $(document).ready(function () {
        console.log("appt");
        $("#__appt").addClass("active");
      });
    }

    if (this.router.url == '/dashboard') {
      $(document).ready(function () {
        console.log("sale")
        $("#__sale").addClass("active");
      });
    }

    if (this.router.url == '/schedule') {
      $(document).ready(function () {
        $("#__schedule").addClass("active");
      });
    }

    if (this.router.url == '/reports') {
      $(document).ready(function () {
        $("#__reports").addClass("active");
      });
    }

    if (this.router.url == '/management') {
      $(document).ready(function () {
        $("#__manager").addClass("active");
      });
    }

    if (this.router.url == '/inventory') {
      $(document).ready(function () {
        $("#__inventory").addClass("active");
      });
    }
  }

  ngOnInit() {

  }

  redirectToDashbaord() {
    this.router.navigate(['dashboard']);
    $("#__sale").click(function () {
      $("#__sale").addClass("active");
    });
  }

  redirectToAppointment() {
    this.router.navigate(['appointments'])
    $("#__appt").click(function () {
      $("#__appt").addClass("active");
    });
  }

  redirectToTimeClocks() {
    this.router.navigate(['time-clocks'])
  }

  redirectToSchedule() {
    this.router.navigate(['schedule'])
    $("#__schedule").click(function () {
      $("#__schedule").addClass("active");
    });
  }

  redirectToReport() {
    this.router.navigate(['reports'])
    $("#__reports").click(function () {
      $("#__reports").addClass("active");
    });
  }

  redirectToManager() {
    this.router.navigate(['management'])
    $("#__manager").click(function () {
      $("#__manager").addClass("active");
    });
  }

  redirectToInventory() {
    this.router.navigate(['inventory'])
    $("#__inventory").click(function () {
      $("#__inventory").addClass("active");
    });
  }

  redirectToSetup() {
    this.router.navigate(['setup'])
    $("#__setup").click(function () {
      $("#__setup").addClass("active");
    });
  }

  newTicket() {
    this.router.navigate(['new-ticket']);
  }
  loginSubmite() {
    var data = {
      password: this.password,
      email_id: this.mailId
    }
    if (this.mailId && this.password) {
      this.http.post(environment.host + 'time-clocks/login', data).subscribe(loginData => {
        if (this.loginData.status === 200) {
          $("#allInfo").modal('hide');
          this.router.navigate(['time-clocks']);
        }
      });
    } else {
      this.alerts = [{
        type: 'danger',
        msg: `Invalid credentials`,
        timeout: 1000
      }];
    }
  }

}
