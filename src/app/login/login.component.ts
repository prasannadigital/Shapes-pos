import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { environment } from '../../environments/environment';
import { LoginServiceService } from '../services/login-service.service';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
import { NgxSpinnerService } from 'ngx-spinner';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage=false;
  msgs: Message[] = [];
  alerts: any[] = [];
  btnDisable=true;
  constructor(private spinner: NgxSpinnerService,private http: HttpClient, private router: Router,private service:LoginServiceService,private messageService: MessageService) {}
  model: any = {};

  onSubmit() {
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    this.spinner.show();
      if (this.model.email_id && this.model.password) {
     this.service.saveLoginDetails(this.model).subscribe(loginData => {
         if (loginData.json().status == true) {
          console.log(loginData.json().result[0])
         sessionStorage.setItem('primaryLoginData', JSON.stringify(loginData.json().result[0]));
          this.spinner.hide();
         this.router.navigate(['dashboard']);
           $('#myModal').modal('hide');
        }else {
          this.errorMessage = true;
           this.spinner.hide();
         }
      });
  }
}
errorClear(){
  this.errorMessage = false;
}
  ngOnInit() {
  this.loginPopUp();
  }
  loginPopUp() {
      $('#myModal').modal('show');    
      }
      
}