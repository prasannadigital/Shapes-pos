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
  disable_time_in=false;
  disable_break_out=true;
  disable_break_in=true;
  disable_time_out=true;
  titleStyle="hidden";
  

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
    'time_clock_id':'',
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
    //console.log(this.test1);
    //console.log(this.test1.emp_id);
    //this.data.id=this.test1.id;
    this.data.time_clock_id=this.test1.time_clock_id;
    this.data.emp_id=this.test1.emp_id;
    this.data.check_in_time=this.test1.check_in_time;
    this.data.check_out_time=this.test1.check_out_time;
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
      if(this.data.check_in_time){
        this.disable_time_in=true;
        this.disable_break_out=false;
        this.disable_break_in=false;
      }
      if(!this.data.check_out_time){
        this.disable_time_out=false;

      }
      
    });
  } else {
    this.alerts = [{
      type: 'danger',
      msg: `Invalid credentials`,
      timeout: 1000
    }];
  }
  this.titleStyle="visible";
}
// time_in=new Date(this.data.check_in_time);
// first_break_out=new Date(this.data.break_out1)
// milisecondsDiff = (this.first_break_out - this.time_in);
// diff=Math.floor(this.milisecondsDiff/(1000*60*60)).toLocaleString(undefined, {minimumIntegerDigits: 2}) + ":" + (Math.floor(this.milisecondsDiff/(1000*60))%60).toLocaleString(undefined, {minimumIntegerDigits: 2})  + ":" + (Math.floor(this.milisecondsDiff/1000)%60).toLocaleString(undefined, {minimumIntegerDigits: 2}) 
time_in=this.data.check_in_time;
first_break_out=this.data.break_out1

clockInTime(){
  this.data.check_in_time = Date.now();
 console.log(this.data.check_in_time);
 
 
 this.service.saveInandOutTime(this.data).subscribe(response => {
   console.log(response);
   
 });
 this.disable_time_in=true;
 this.disable_break_out=false;
 this.disable_time_out=false;
 
  //alert("hfjhdsjfh");
}
clockOutTime(){
  this.data.check_out_time = Date.now();
  this.service.saveInandOutTime(this.data).subscribe(response => {
    console.log(response);
  });

  //alert("hfjhdsjfh");
}
breakOutTime(){
  console.log(this.break_out1);
  //console.log(this.first_break_out)

if(this.data.break_out1=== null){
  this.data.break_out1 = Date.now();
  console.log(this.data);
  
  this.service.saveInandOutTime(this.data).subscribe(response => {
    console.log(response);
  });
  //console.log(this.diff)
  this.disable_break_out=true;
  this.disable_break_in=false;
  return true;
 
  //alert("hfjhdsjfh");
}
if(this.data.break_out2=== null){
  this.data.break_out2 = Date.now();
  this.service.saveInandOutTime(this.data).subscribe(response => {
    console.log(response);
  });
  this.disable_break_out=true;
  this.disable_break_in=false;
  return true;
  //alert("hfjhdsjfh");
}
if(this.data.break_out3=== null){
  this.data.break_out3 = Date.now();
  this.service.saveInandOutTime(this.data).subscribe(response => {
    console.log(response);
  });
  this.disable_break_out=true;
  this.disable_break_in=false;
  return true;
  //alert("hfjhdsjfh");
}
if(this.data.break_out4=== null){
  this.data.break_out4 = Date.now();
  this.service.saveInandOutTime(this.data).subscribe(response => {
    console.log(response);
  });
  this.disable_break_out=true;
  this.disable_break_in=false;
  return true;
  //alert("hfjhdsjfh");
}
}
breakInTime(){
  console.log(this.break_out1);
if(this.data.break_in1=== null){
  this.data.break_in1 = Date.now();
  this.service.saveInandOutTime(this.data).subscribe(response => {
    console.log(response);
  });
  this.disable_break_out=false;
  this.disable_break_in=true;
  return true;
  //alert("hfjhdsjfh");
}
if(this.data.break_in2=== null){
  this.data.break_in2 = Date.now();
  this.service.saveInandOutTime(this.data).subscribe(response => {
    console.log(response);
  });
  this.disable_break_out=false;
  this.disable_break_in=true;
  return true;
  //alert("hfjhdsjfh");
}
if(this.data.break_in3=== null){
  this.data.break_in3 = Date.now();
  this.service.saveInandOutTime(this.data).subscribe(response => {
    console.log(response);
  });
  this.disable_break_out=false;
  this.disable_break_in=true;
  return true;
  //alert("hfjhdsjfh");
}
if(this.data.break_in4=== null){
  this.data.break_in4 = Date.now();
  this.service.saveInandOutTime(this.data).subscribe(response => {
    console.log(response);
  });
  this.disable_break_out=false;
  this.disable_break_in=true;
  return true;
  //alert("hfjhdsjfh");
}
}
}
