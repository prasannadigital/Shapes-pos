import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { environment } from '../../environments/environment';
import { LoginServiceService } from '../services/login-service.service';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msgs: Message[] = [];
  password = "";
  mailId = "";
  alerts: any[] = [];
  constructor(private http: HttpClient, private router: Router,private service:LoginServiceService,private messageService: MessageService) {}

  ngOnInit() {
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
  showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', detail:'Validation failed'});
  }
  loginSubmite() {
    var data = {
      password: this.password,
      email_id: this.mailId
    }
    if (this.mailId && this.password) {
      this.service.saveLoginDetails(data).subscribe(loginData => {
        if (loginData.json().status == true) {
          //console.log(loginData.json().result[0])
          sessionStorage.setItem('userSession', JSON.stringify(loginData.json().result[0]));
          this.router.navigate(['dashboard']);
        }else {
          this.showError();
        }
      });
    } 
  }
  
}