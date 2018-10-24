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
    
    if (this.router.url == '/appointments') {
      this.removeActiveClass();
      $(document).ready(function () {
        $("#__appt").addClass("active");
      });
    }

    if (this.router.url == '/dashboard') {
      this.removeActiveClass();
      $(document).ready(function () {
        $("#__sale").addClass("active");
      });
    }
    if (this.router.url == '/time-clocks') {
      this.removeActiveClass();
      $(document).ready(function () {
        $("#__timeclock").addClass("active");
      });
    }
    if (this.router.url == '/schedule') {
      this.removeActiveClass();
      $(document).ready(function () {
        $("#__schedule").addClass("active");
      });
    }

    if (this.router.url == '/reports') {
      this.removeActiveClass();
      $(document).ready(function () {
        $("#__reports").addClass("active");
      });
    }

    if (this.router.url == '/management') {
      this.removeActiveClass();
      $(document).ready(function () {
        $("#__manager").addClass("active");
      });
    }

    if (this.router.url == '/inventory') {
      this.removeActiveClass();
      $(document).ready(function () {
        $("#__inventory").addClass("active");
      });
    }
    if (this.router.url == '/setup') {
      this.removeActiveClass();
      $(document).ready(function () {
        $("#__setup").addClass("active");
      });
    }
  }


  ngOnInit() {

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

  redirectToDashbaord() {
    this.removeActiveClass();
    this.router.navigate(['dashboard']);
    $("#__sale").click(function () {
      $("#__sale").addClass("active");
    });
  }

  redirectToAppointment() {
    this.removeActiveClass();
    this.router.navigate(['appointments'])
    $("#__appt").click(function () {
      $("#__appt").addClass("active");
    });
  }

  redirectToTimeClocks() {
    this.removeActiveClass();
    this.router.navigate(['time-clocks'])
    $("#__timeclock").click(function () {
      $("#__timeclock").addClass("active");
    });
  }

  redirectToSchedule() {
    this.removeActiveClass();
    this.router.navigate(['schedule'])
    $("#__schedule").click(function () {
      $("#__schedule").addClass("active");
    });
  }

  redirectToReport() {
    this.removeActiveClass();
    this.router.navigate(['reports'])
    $("#__reports").click(function () {
      $("#__reports").addClass("active");
    });
  }

  redirectToManager() {
    this.removeActiveClass();
    this.router.navigate(['management'])
    $("#__manager").click(function () {
      $("#__manager").addClass("active");
    });
  }

  redirectToInventory() {
    this.removeActiveClass();
    this.router.navigate(['inventory'])
    $("#__inventory").click(function () {
      $("#__inventory").addClass("active");
    });
  }

  redirectToSetup() {
    this.removeActiveClass();
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
