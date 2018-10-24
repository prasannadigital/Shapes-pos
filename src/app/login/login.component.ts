import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { environment } from '../../environments/environment';
import { LoginServiceService } from '../services/login-service.service';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage=false;
  msgs: Message[] = [];
  password = "";
  mailId = "";
  alerts: any[] = [];
  btnDisable=true;
  constructor(private spinner: NgxSpinnerService,private http: HttpClient, private router: Router,private service:LoginServiceService,private messageService: MessageService) {}

  ngOnInit() {
  
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
  showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', detail:'invalid credentials'});
  }
  loginSubmite() {
    var data = {
      password: this.password,
      email_id: this.mailId
    }
    this.spinner.show();
    if (this.mailId && this.password) {
      this.service.saveLoginDetails(data).subscribe(loginData => {
        if (loginData.json().status == true) {
          console.log(loginData.json().result[0])
          sessionStorage.setItem('primaryLoginData', JSON.stringify(loginData.json().result[0]));
          this.router.navigate(['dashboard']);
          this.spinner.hide();
        }else {
          this.errorMessage = true;
          this.spinner.hide();
        }
      });
    } 
  }
  clearErrorMess(){
    this.errorMessage = false;
    //this.password="";
    //this.mailId="";

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
}