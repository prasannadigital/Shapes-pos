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
  data: any = {
    'id':'',
    'emp_id': '',
    'check_in_time': null,
    'break_in1': null,
    'break_out1': null,
    'break_in2': null,
    'break_out2': null,
    'break_in3': null,
    'break_out3': null,
    'break_out4': null,
    'check_in_date': null,
    'modified_by': null,
    'remarks': null,
    'total_hours': ''
  };
  

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
    this.data.emp_id=this.test1.emp_id;
    this.data.check_in_time=this.test1.check_in_time;
    this.data.break_in1=this.test1.break_in1;
    this.data.break_out1=this.test1.break_out1;
    this.data.break_in2=this.test1.break_in2;
    this.data.break_out2=this.test1.break_out2;
    this.data.break_in3=this.test1.break_in3;
    this.data.break_out3=this.test1.break_out3;
    this.data.break_in4=this.test1.break_in4;
    this.data.break_out4=this.test1.break_out4;
    this.data.check_in_date=this.test1.check_in_date;
    this.data.modified_by=this.test1.modified_by;
    this.data.remarks=this.test1.remarks;
    this.data.total_hours=this.test1.total_hours;
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
saveClockTimings(){
 var data={
  emp_id:this.emp_id,
  check_in_time:this.check_in_time,
  check_out_time:this.check_out_time,
  break_in1:this.break_in1,
  break_out1:this.break_out1,
  break_in2:this.break_in2,
  break_out2:this.break_out2,
  break_in3:this.break_in3,
  break_out3:this.break_out3,
  break_in4:this.break_in4,
  break_out4:this.break_out4,
  check_in_date:this.check_in_date,
  modified_by:this.modified_by,
  remarks:this.remarks,
  total_hours:this.total_hours
 } 
 this.service.saveInandOutTime(data);
}
clockInTime(){

  this.data.check_in_time = Date.now();
 console.log(this.data.check_in_time);
 this.service.saveInandOutTime(this.data).subscribe(response => {
   console.log(response);
 });
  //alert("hfjhdsjfh");
}
clockOutTime(){
  this.data.check_out_time = Date.now();
  this.saveClockTimings();
  //alert("hfjhdsjfh");
}
breakOutTime(){
  console.log(this.break_out1);
if(this.data.break_out1=== null){
  this.data.break_out1 = Date.now();
  this.saveClockTimings();
  return true;
  //alert("hfjhdsjfh");
}
if(this.data.break_out2=== null){
  this.data.break_out2 = Date.now();
  this.saveClockTimings();
  return true;
  //alert("hfjhdsjfh");
}
if(this.data.break_out3=== null){
  this.data.break_out3 = Date.now();
  this.saveClockTimings();
  return true;
  //alert("hfjhdsjfh");
}
if(this.data.break_out4=== null){
  this.data.break_out4 = Date.now();
  this.saveClockTimings();
  return true;
  //alert("hfjhdsjfh");
}
}
breakInTime(){
  console.log(this.break_out1);
if(this.data.break_in1=== null){
  this.data.break_in1 = Date.now();
  this.saveClockTimings();
  return true;
  //alert("hfjhdsjfh");
}
if(this.data.break_in2=== null){
  this.data.break_in2 = Date.now();
  this.saveClockTimings();
  return true;
  //alert("hfjhdsjfh");
}
if(this.data.break_in3=== null){
  this.data.break_in3 = Date.now();
  this.saveClockTimings();
  return true;
  //alert("hfjhdsjfh");
}
if(this.data.break_in4=== null){
  this.data.break_in4 = Date.now();
  this.saveClockTimings();
  return true;
  //alert("hfjhdsjfh");
}
}
}
