import { Component, OnInit } from '@angular/core';
import { TimeClokServiceService } from '../services/time-clok-service.service'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { Globals } from '../global/global-urls';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var $: any;
import { Location } from '@angular/common';
import { LoginServiceService } from '../services/login-service.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import {ExcelService} from '../services/excel.service';
@Component({
  selector: 'time-clocks',
  templateUrl: './time-clocks.component.html',
  styleUrls: ['./time-clocks.component.css']
})
export class TimeClocksComponent implements OnInit {
  disable_time_in = false;
  disable_break_out = true;
  disable_break_in = true;
  disable_time_out = true;
  titleStyle = "hidden";
  buttonColorTimeIn: string = '#e4e9ef';
  buttonColorTimeOut: string = '#345465';
  buttonColorBreakIn: string = '#345465';
  buttonColorBreakOut: string = '#345465';
  totalHours;
  totalMin;
  finalHours;

  constructor(private excelService:ExcelService,private loginService: LoginServiceService, private service: TimeClokServiceService, private _location: Location, private http: HttpClient, private router: Router, private globals: Globals, private messageService: MessageService) { }

  emp_id = '';
  errorMessage = false;
  check_in_time = null;
  check_out_time = null;
  break_in1 = null;
  break_out1 = null;
  break_in2 = null;
  break_out2 = null;
  break_in3 = null;
  break_out3 = null;
  break_in4 = null;
  break_out4 = null;
  check_in_date = '';
  modified_by = '';
  total_hours = '';
  remarks = '';
  today: number;
  password = "";
  mailId = "";
  alerts: any[] = [];
  loginData: any[];
  loginTest: any={
    'user_type_id':''
  };
  test: 'text';
  test1: any;
  data: any = {
    'time_clock_id': '',
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
  msgs: Message[] = [];
  ngOnInit() {
     sessionStorage.removeItem('backBtnInventory');     
     sessionStorage.removeItem('backBtnSetup');     
     sessionStorage.removeItem('backBtnReports');     
     sessionStorage.removeItem('backBtnManager');     
     //sessionStorage.removeItem('backBtnSales');     
     //sessionStorage.removeItem('backBtnAppiontments');     
     //sessionStorage.removeItem('backBtnTimeclocks');     
     sessionStorage.removeItem('backBtnShedule');//remove Back btn popup
    this.loginPopUp();
    this.getTimeAndDate();
    setInterval(() => {
      this.getTimeAndDate();
    }, 1000);
  }
  getTimeAndDate() {
    this.today = Date.now();
  }
  showError() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', detail: 'Validation failed' });
  }

  loginPopUp() {

    if(sessionStorage.backBtnTimeclocks){
      $('#myModal').modal('hide');
      this.titleStyle = "visible";
    }
    
      else{
        $('#myModal').modal('show');
      }
  }

  backLocation() {
    this._location.back();
  }

  RedirectToHome() {
    this.router.navigate(['dashboard']);
  }
  errorClear(){
    this.errorMessage = false;
  }
  loginSubmite() {
    if (sessionStorage.secondaryLoginData) {
      window.sessionStorage.removeItem('secondaryLoginData');
      //console.log('secondaryLoginData')
    }
    var data = {
      password: this.password,
      email_id: this.mailId
    }
    if (this.mailId && this.password) {
      this.loginService.saveLoginDetails(data).subscribe(loginData => {
        if(loginData.json().status == false){
          this.errorMessage = true;
        }
        this.loginTest=loginData.json().result[0];
        console.log(this.loginTest);
        console.log(this.loginTest.user_type_id);
        
        if (loginData.json().status == true) {
          //console.log(loginData.json().result[0])
          sessionStorage.setItem('secondaryLoginData', JSON.stringify(loginData.json().result[0]));
          sessionStorage.setItem('backBtnTimeclocks', 'Y');
          $('#myModal').modal('hide');
          this.titleStyle = "visible";
        } else {
          this.errorMessage = true;
    
        }
      });
    }
    if (this.mailId && this.password) {
      this.http.post(this.globals.api + 'time-clocks/login', data).subscribe(response => {
        this.test1 = response;
        this.data.time_clock_id = this.test1.time_clock_id;
        this.data.emp_id = this.test1.emp_id;
        this.data.check_in_time = this.test1.check_in_time;
        this.data.check_out_time = this.test1.check_out_time;
        this.data.break_in1 = this.test1.break_in1;
        this.data.break_out1 = this.test1.break_out1;
        this.data.break_in2 = this.test1.break_in2;
        this.data.break_out2 = this.test1.break_out2;
        this.data.break_in3 = this.test1.break_in3;
        this.data.break_out3 = this.test1.break_out3;
        this.data.break_in4 = this.test1.break_in4;
        this.data.break_out4 = this.test1.break_out4;
        this.data.check_in_date = this.test1.check_in_date;
        this.data.modified_by = this.test1.modified_by;
        this.data.remarks = this.test1.remarks;
        this.data.total_hours = this.test1.total_hours;
        if (this.data.check_in_time) {
          this.disable_time_in = true;
          this.disable_break_out = false;
          this.disable_break_in = false;
        }
        if (!this.data.check_out_time) {
          this.disable_time_out = false;
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
  time_in = this.data.check_in_time;
  first_break_out = this.data.break_out1

  clockInTime() {
    this.data.check_in_time = Date.now();
    this.service.saveInandOutTime(this.data).subscribe(response => {
      this.data.time_clock_id = response.json().time_clock_id;
    });
    this.disable_time_in = true;
    this.disable_break_out = false;
    this.disable_time_out = false;
    this.buttonColorTimeIn = '#345465';
    this.buttonColorTimeOut = '#e4e9ef';
    this.buttonColorBreakIn = '#345465';
    this.buttonColorBreakOut = '#e4e9ef';
  }

  clockOutTime() {
    this.data.check_out_time = Date.now();
    this.service.saveInandOutTime(this.data).subscribe(response => {
    });
    this.disable_break_out = true;
    this.disable_break_in = true;

    this.buttonColorTimeIn = '#345465';
    this.buttonColorTimeOut = '#345465';
    this.buttonColorBreakIn = '#345465';
    this.buttonColorBreakOut = '#345465';

    let BreakOut1 = this.getFormattedDate(this.data.break_out1);
    let BreakIn1 = this.getFormattedDate(this.data.break_in1);
    var dt1 = new Date(BreakOut1);
    var dt2 = new Date(BreakIn1);
    let difference1 = dt2.getTime() - dt1.getTime();
    let resultInMinutes1 = Math.round(difference1 / 60000);

    let BreakOut2 = this.getFormattedDate(this.data.break_out2);
    let BreakIn2 = this.getFormattedDate(this.data.break_in2);
    var dt3 = new Date(BreakOut2);
    var dt4 = new Date(BreakIn2);
    let difference2 = dt4.getTime() - dt3.getTime();
    let resultInMinutes2 = Math.round(difference2 / 60000);

    let BreakOut3 = this.getFormattedDate(this.data.break_out3);
    let BreakIn3 = this.getFormattedDate(this.data.break_in3);
    var dt5 = new Date(BreakOut3);
    var dt6 = new Date(BreakIn3);
    let difference3 = dt6.getTime() - dt5.getTime();
    let resultInMinutes3 = Math.round(difference3 / 60000);

    let BreakOut4 = this.getFormattedDate(this.data.break_out4);
    let BreakIn4 = this.getFormattedDate(this.data.break_in4);
    var dt7 = new Date(BreakOut4);
    var dt8 = new Date(BreakIn4);
    let difference4 = dt8.getTime() - dt7.getTime();
    let resultInMinutes4 = Math.round(difference4 / 60000);
    var timeDiffTotal = resultInMinutes1 + resultInMinutes2 + resultInMinutes3 + resultInMinutes4;
    let TimeIn = this.getFormattedDate(this.data.check_in_time);
    let TimeOut = this.getFormattedDate(this.data.check_out_time);
    var dt0 = new Date(TimeIn);
    var dt9 = new Date(TimeOut);
    let totaldiff = dt9.getTime() - dt0.getTime();
    let resultInMinutes = Math.round(totaldiff / 60000);
    var finaltotal = resultInMinutes - timeDiffTotal;
    this.totalHours = Math.round(finaltotal / 60);
    if (this.totalHours == 0) {
      this.totalMin = finaltotal - (60 * this.totalHours);
    } else {
      this.totalMin = (60 * this.totalHours) - finaltotal;
    }
    this.finalHours = this.totalHours + ":" + this.totalMin;
  }

  getFormattedDate(_date) {
    var date = new Date(_date);
    var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    return str;
  }

  breakOutTime() {
    if (this.data.break_out1 === null) {
      this.data.break_out1 = Date.now();
      this.service.saveInandOutTime(this.data).subscribe(response => {
      });
      this.disable_break_out = true;
      this.disable_break_in = false;

      this.buttonColorBreakIn = '#e4e9ef';
      this.buttonColorBreakOut = '#345465';
      return true;
    }
    if (this.data.break_out2 === null) {
      this.data.break_out2 = Date.now();
      this.service.saveInandOutTime(this.data).subscribe(response => {
      });
      this.disable_break_out = true;
      this.disable_break_in = false;

      this.buttonColorBreakIn = '#e4e9ef';
      this.buttonColorBreakOut = '#345465';
      return true;
    }
    if (this.data.break_out3 === null) {
      this.data.break_out3 = Date.now();
      this.service.saveInandOutTime(this.data).subscribe(response => {
      });
      this.disable_break_out = true;
      this.disable_break_in = false;

      this.buttonColorBreakIn = '#e4e9ef';
      this.buttonColorBreakOut = '#345465';
      return true;
    }
    if (this.data.break_out4 === null) {
      this.data.break_out4 = Date.now();
      this.service.saveInandOutTime(this.data).subscribe(response => {
      });
      this.disable_break_out = true;
      this.disable_break_in = false;

      this.buttonColorBreakIn = '#e4e9ef';
      this.buttonColorBreakOut = '#345465';
      return true;
    }
  }

  breakInTime() {
    if (this.data.break_in1 === null) {
      this.data.break_in1 = Date.now();
      this.service.saveInandOutTime(this.data).subscribe(response => {
      });
      this.disable_break_out = false;
      this.disable_break_in = true;

      this.buttonColorBreakIn = '#345465';
      this.buttonColorBreakOut = '#e4e9ef';
      return true;
    }
    if (this.data.break_in2 === null) {
      this.data.break_in2 = Date.now();
      this.service.saveInandOutTime(this.data).subscribe(response => {
      });
      this.disable_break_out = false;
      this.disable_break_in = true;

      this.buttonColorBreakIn = '#345465';
      this.buttonColorBreakOut = '#e4e9ef';
      return true;
    }
    if (this.data.break_in3 === null) {
      this.data.break_in3 = Date.now();
      this.service.saveInandOutTime(this.data).subscribe(response => {
      });
      this.disable_break_out = false;
      this.disable_break_in = true;

      this.buttonColorBreakIn = '#345465';
      this.buttonColorBreakOut = '#e4e9ef';
      return true;
    }
    if (this.data.break_in4 === null) {
      this.data.break_in4 = Date.now();
      this.service.saveInandOutTime(this.data).subscribe(response => {
      });
      this.disable_break_out = false;
      this.disable_break_in = true;

      this.buttonColorBreakIn = '#345465';
      this.buttonColorBreakOut = '#e4e9ef';
      return true;
    }
  }
}
