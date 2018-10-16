import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SheduleServiceService } from '../services/shedule-service.service';
import * as moment from 'moment/moment';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';
declare var $: any;
import {ExcelService} from '../services/excel.service';
declare var jsPDF: any;
@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  errorMessage=false;
  loginTest:any;
  password = "";
  mailId = "";
  public date1: any;
  public date2: any;
  cols: any[];
  selectedEmpName: string;
  titleStyle = "hidden";
  titleStyle1 = "hidden";
  shedule: any = {
    'startdate': '',
    'enddate': '',
    'branch_id': '',
    'employee_id': '',
    'employee_firstname': ''
  }
  selectedEmpData: any = {
    'employee_firstname': ''
  }
  locationData = new Array();
  empData = new Array();
  appointmentsData = new Array();

  constructor(private excelService:ExcelService,private service: SheduleServiceService,private router: Router,private loginService: LoginServiceService, private messageService: MessageService) { }

  ngOnInit() {
     sessionStorage.removeItem('backBtnInventory');     
     sessionStorage.removeItem('backBtnSetup');     
     sessionStorage.removeItem('backBtnReports');     
     sessionStorage.removeItem('backBtnManager');     
     //sessionStorage.removeItem('backBtnSales');    
     //sessionStorage.removeItem('backBtnAppiontments');     
     sessionStorage.removeItem('backBtnTimeclocks');     
     //sessionStorage.removeItem('backBtnShedule');//remove Back btn popup
    this.loginPopUp();
    this.service.getAllLocations().subscribe(response => {
      this.locationData = response.json().result;
      console.log("ghdsgfhdbfbdfbdfbdfbdfbdfbdfbgdfgsdhf"+this.locationData)
    });
    this.service.getEmployee().subscribe(response => {
      this.empData = response.json().result;
    });

  }

  loginPopUp() {

    if(sessionStorage.backBtnShedule){
      $('#myModal').modal('hide');
      this.titleStyle = "visible";
    }
    
      else{
        $('#myModal').modal('show');
      }
  }
  showSuccess() {
    this.messageService.add({ key: 'tl', severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
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
        if (loginData.json().status == false) {
          this.errorMessage = true;
        }
        this.loginTest = loginData.json().result[0];
        console.log(this.loginTest);
        console.log(this.loginTest.user_type_id);

        if (loginData.json().status == true && this.loginTest.user_type_id !== 4) {
          //console.log(loginData.json().result[0])
          sessionStorage.setItem('secondaryLoginData', JSON.stringify(loginData.json().result[0]));
          sessionStorage.setItem('backBtnShedule', 'Y');
          $('#myModal').modal('hide');
          this.titleStyle= "visible";
        } else {
          this.errorMessage = true;

        }
      });
    }
  }
  errorClear(){
    this.errorMessage = false;
  }
  RedirectToHome() {
    this.router.navigate(['dashboard']);
  }
  getStartDate() {
    let day = this.date1.getDate();
    let month = this.date1.getMonth() + 1;
    let year = this.date1.getFullYear();
    let newDate = moment(this.date1).format('YYYY-MM-DD').toString();
    this.shedule.startdate = newDate;
  }

  getEndDate() {
    let day1 = this.date2.getDate();
    let month1 = this.date2.getMonth() + 1;
    let year1 = this.date2.getFullYear();
    let newDate1 = moment(this.date2).format('YYYY-MM-DD').toString();
    this.shedule.enddate = newDate1;
  }

  getShedule() {
    this.service.getEmpAppointments(this.shedule.startdate, this.shedule.enddate, this.shedule.employee_id, this.shedule.branch_id).subscribe(response => {
      this.appointmentsData = response.json().result;
      this.titleStyle1 = "visible";
    });
  }

  setStaff(employee_id: any, employee_firstname: any): void {
    this.shedule.employee_id = employee_id;
    this.service.getSelectedEmployee(this.shedule.employee_id).subscribe(response => {
      console.log(response.json().result);
      this.selectedEmpData = response.json().result;
      var data = this.selectedEmpData.pop();
      this.selectedEmpName = data.employee_firstname;
    });
  }
  
  setBranch(branch_id: any): void {
    this.shedule.branch_id = branch_id;
  }
  pdfDownload() {
    var columns = [
      { title: "Name", dataKey: "name" },
      { title: "Mobile", dataKey: "mobile" },
      { title: "Service Name", dataKey: "servicename" },
      { title: "Duration", dataKey: "difftime" },
      { title: "starttime", dataKey: "starttime" },
      { title: "endtime", dataKey: "endtime" },      
      { title: "Price", dataKey: "payable_amount" }
      
    ];

    var rows = this.appointmentsData;
    var doc = new jsPDF('');
    doc.autoTable(columns, rows, {
      styles: { fillColor: [100, 255, 255] },
      columnStyles: {
        id: { fillColor:[255,0,0] }
      },
      margin: { top: 50 },
      addPageContent: function () {
        doc.text("Appointments",  30,30);      
      }
    });
    doc.save('Shedule.pdf');
  }
  xlDownload(){
    this.excelService.exportAsExcelFile(this.appointmentsData, 'Satff Activities');
  }
}
