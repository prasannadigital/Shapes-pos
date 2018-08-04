import { Component, OnInit } from '@angular/core';
import { TimeClokServiceService} from '../services/time-clok-service.service'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { Globals } from '../global/global-urls';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'time-clocks',
  templateUrl: './time-clocks.component.html',
  styleUrls: ['./time-clocks.component.css']
})
export class TimeClocksComponent implements OnInit {

  constructor(private service:TimeClokServiceService,private http: HttpClient, private router: Router, private globals: Globals) { }

  today: number;
  password = "";
  mailId = "";
  alerts: any[] = [];

  ngOnInit() {
    this.getTimeAndDate();
            setInterval(() => {
                this.getTimeAndDate(); 
                }, 1000);
  }
 getTimeAndDate(){
  this.today = Date.now();
 }
 
 loginSubmite()
 {
  var data = {
    password: this.password,
    email_id: this.mailId
  }
  if (this.mailId && this.password) {
    this.http.post(this.globals.api + 'auth/login', data).subscribe(loginData => {
      if (Object.keys(loginData).length) {
        sessionStorage.setItem('userSession', JSON.stringify(loginData));
        this.router.navigate(['time-clock']);
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
