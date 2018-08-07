import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globals } from '../global/global-urls';
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
  //loginData=new Array();
  loginData:any={
    'status':'',
    'userData':''
  }
  


  constructor(private http: HttpClient, private router: Router, private globals: Globals) { 
    
  }

  ngOnInit() {
    
  }

  redirectToDashbaord(){
    this.router.navigate(['dashboard']);
  }
  
  
  
  newTicket(){
    console.log("new ticket");
    this.router.navigate(['new-ticket']);
  }
  loginSubmite(){
    var data = {
      password: this.password,
      email_id: this.mailId
    }
    if (this.mailId && this.password) {
      this.http.post(this.globals.api + 'time-clocks/login', data).subscribe(loginData => {
        console.log("jhzxgjhcghjzx"+loginData)
        if (this.loginData.status===200) {
          console.log('hii')
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
