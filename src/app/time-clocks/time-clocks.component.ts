import { Component, OnInit } from '@angular/core';
import { TimeClokServiceService} from '../services/time-clok-service.service'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { Globals } from '../global/global-urls';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'time-clocks',
  templateUrl: './time-clocks.component.html',
  styleUrls: ['./time-clocks.component.css']
})
export class TimeClocksComponent implements OnInit {

  constructor(private service:TimeClokServiceService,private http: HttpClient, private router: Router, private globals: Globals) { }
 emp_id='';
 check_in_time=null;
 check_out_time=null;
 break_in1=null;
 break_out1=null;
 break_in2=null;
 break_out2=null;
 break_in3=null;
 break_out3=null;
 break_in4=null;
 break_out4=null;
 check_in_date='';
 modified_by='';
 total_hours='';
 remarks='';
 today: number;
 password = "";
 mailId = "";
  
  alerts: any[] = [];
  loginData:any[];
  test:'text';
  test1:any;

  

  ngOnInit() {
   this.loginPopUp();
    this.getTimeAndDate();
            setInterval(() => {
                this.getTimeAndDate(); 
                }, 1000);
              
  }
 getTimeAndDate(){
  this.today = Date.now();
 }
 loginPopUp(){
         
   $('#myModal').modal('show');
  
 
 }
 loginSubmite(){
  var data = {
    password: this.password,
    email_id: this.mailId
  }
  if (this.mailId && this.password) {
    this.http.post(this.globals.api + 'time-clocks/login', data).subscribe(response => {
    this.test1=response;
    console.log(this.test1);
    console.log(this.test1.emp_id);
      //console.log(loginData);
    
    });
  } else {
    this.alerts = [{
      type: 'danger',
      msg: `Invalid credentials`,
      timeout: 1000
    }];
  }

  
}
clockInTime(){
  this.check_in_time = Date.now();
  //alert("hfjhdsjfh");
}
clockOutTime(){
  this.check_out_time = Date.now();
  //alert("hfjhdsjfh");
}
breakOutTime(){
  console.log(this.break_out1);
if(this.break_out1=== null){
  this.break_out1 = Date.now();
  return true;
  //alert("hfjhdsjfh");
}
if(this.break_out2=== null){
  this.break_out2 = Date.now();
  return true;
  //alert("hfjhdsjfh");
}
if(this.break_out3=== null){
  this.break_out3 = Date.now();
  return true;
  //alert("hfjhdsjfh");
}
if(this.break_out4=== null){
  this.break_out4 = Date.now();
  return true;
  //alert("hfjhdsjfh");
}
}
breakInTime(){
  console.log(this.break_out1);
if(this.break_in1=== null){
  this.break_in1 = Date.now();
  return true;
  //alert("hfjhdsjfh");
}
if(this.break_in2=== null){
  this.break_in2 = Date.now();
  return true;
  //alert("hfjhdsjfh");
}
if(this.break_in3=== null){
  this.break_in3 = Date.now();
  return true;
  //alert("hfjhdsjfh");
}
if(this.break_in4=== null){
  this.break_in4 = Date.now();
  return true;
  //alert("hfjhdsjfh");
}
}
}
