import { Component, OnInit } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { Globals } from '../global/global-urls';
import {LoginServiceService} from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData:any = {
    'password' : '',
    'mailId' : ''
  }
  
  constructor(private service:LoginServiceService, private router: Router, private globals: Globals,private http:Http) {

  }

  alerts: any[] = [];

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  ngOnInit() {
  }

  loginSubmite() {
    var data = {
      password: this.loginData.password,
      email_id: this.loginData.mailId
    }
    if (this.loginData.mailId && this.loginData.password) {
      this.service.saveLoginDetails(this.loginData).subscribe(response => {
         console.log(response);
        if (Object.keys(this.loginData).length) {
          this.loginData=response.json();
          sessionStorage.setItem('userSession', JSON.stringify(this.loginData));
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