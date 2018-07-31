import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { Globals } from '../global/global-urls';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password = "";
  mailId = "";
  constructor(private http: HttpClient, private router: Router, private globals: Globals) {

  }

  alerts: any[] = [];

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  ngOnInit() {
  }

  loginSubmite() {
    var data = {
      password: this.password,
      email_id: this.mailId
    }
    if (this.mailId && this.password) {
      this.http.post(this.globals.api + 'auth/login', data).subscribe(loginData => {
        if (Object.keys(loginData).length) {
          sessionStorage.setItem('userSession', JSON.stringify(loginData));
          this.router.navigate(['dashboard']);
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