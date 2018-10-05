import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild, ViewEncapsulation } from "@angular/core";
import "dhtmlx-scheduler";
import { environment } from '../../environments/environment';
import { } from "@types/dhtmlxscheduler";
import { AppointmentsServiceService } from '../services/appointments-service.service';
import { SheduleServiceService } from '../services/shedule-service.service';
import * as moment from 'moment/moment';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
import {DropdownModule} from 'primeng/dropdown';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  selectedOption: any;
  searchValue:'';
  firstName = '';
  lastName = '';
  DOB = '';
  gender = '';
  mobileNo = '';
  MailId = '';
  name = '';
  custFirstName = '';
  custLastName = '';
  custGender = '';
  custNo = '';
  custEmail = '';
  custStatus = '';
  submitted = false;
  noRecordsFound=false;
  message:string;
  searchCondition=false;
  model = {
    user_id: ''
  }
  temp: any[] = new Array();
  selectedValue: string;
  users= new Array();
  msgs: Message[] = [];
  createNew=false;
  public date1: any;
  public date2: any;
  branchesData = new Array();
  locationData = new Array();
  empData = new Array();
  appiontmentData = new Array();
  shedule: any = {
    'startdate': '',
    'enddate': '',
    'branch_id': '',
    'branch_name':'',
    'employee_id': '',
    'employee_firstname': ''
  }
  appointments: any ={
    'start_date': '',
    'end_date': '',
    'branch_id': '',
    'emp_id':'',
    'text': '',
    'user_id': '',
    'rec_status': 1
  }
  branchData: any={};
  @ViewChild("scheduler_here") schedulerContainer: ElementRef;


  constructor(private http: HttpClient,private serviceData: SheduleServiceService,private service: AppointmentsServiceService,private messageService: MessageService) { }

  ngOnInit() {
    this.serviceData.getAllLocations().subscribe(response => {
      this.branchesData = response.json();
      console.log("ghdsgfhgsdhf"+this.branchesData)
    });
    this.serviceData.getEmployee().subscribe(response => {
      //this.empData = response.json();
    });
    scheduler.config.xml_date = "%Y-%m-%d %H:%i";
    scheduler.init(this.schedulerContainer.nativeElement);
   //this.appiontmentDisplay();
      
  }
  appiontmentDisplay(id1:any,id2:any){
    this.service.get(this.shedule.employee_id,this.shedule.branch_id)
    .subscribe((res) => {
      this.appiontmentData = this.transformJsonToCustomFormat(res.json().data);
      console.log(this.appiontmentData);
      scheduler.parse(this.appiontmentData, "json");
      console.log(this.appiontmentData);
    });
  }
  transformJsonToCustomFormat(input: any[]) {
    console.log(input);
    const response = [];

    input.forEach(item => {
      response.push(
        {
          id: item.id,
          start_date:  moment(item.start_date).format('YYYY-MM-DD HH:mm').toString(),
          end_date:  moment(item.end_date).format('YYYY-MM-DD HH:mm').toString(),
          text: item.firstname
        }
      );
      
    });

    return response;
  }
  showSuccess() {
    this.msgs = [];
      this.msgs.push({severity:'info', summary:'You have sucessfully added availability of Beauty Advisor on '+this.appointments.start_date+' at your location '});
  }
  showSuccessForCustomer() {
    this.msgs = [];
      this.msgs.push({severity:'info', summary:'You have Added Customer sucessfully'});
  }
  viewNewAppiontment(){
    this.createNew=true;
  }
  getStartDate() {
    let day = this.date1.getDate();
    let month = this.date1.getMonth() + 1;
    let year = this.date1.getFullYear();
    let newDate = moment(this.date1).format('YYYY-MM-DD HH:mm').toString();
    this.shedule.startdate = newDate;
  }

  getEndDate() {
    let day1 = this.date2.getDate();
    let month1 = this.date2.getMonth() + 1;
    let year1 = this.date2.getFullYear();
    let newDate1 = moment(this.date2).format('YYYY-MM-DD HH:mm').toString();
    this.shedule.enddate = newDate1;
  }
  setBranch(branch_id: any): void {
    this.shedule.branch_id = branch_id;
    this.serviceData.getBranchDetail(this.shedule.branch_id).subscribe(response =>{
      this.branchData = response.json();
    })
    //this.shedule.branch_name = branch_name;
    this.serviceData.getStaffByLocation(this.shedule.branch_id).subscribe(res => {
      this.empData = res.json().data;
      console.log("hai"+this.empData);
      
    });
    this.serviceData.getStaffAppointments(this.shedule.branch_id = branch_id,this.shedule.branch_id = branch_id)
  }
  setStaffId(employee_id: any): void {
    this.shedule.employee_id = employee_id;
    this.appiontmentDisplay(this.shedule.employee_id,this.shedule.branch_id);
    //this.serviceData.getStaffAppointments(this.shedule.employee_id,this.shedule.branch_id).subscribe(res => {
     // this.appiontmentData = res.json().data;
      //console.log("hai"+this.appiontmentData);
     // alert("Appointments"+this.appiontmentData);
    //});
    
  }
  createAppointment(){
    this.appointments.start_date=this.shedule.startdate;
    this.appointments.end_date=this.shedule.enddate;
    this.appointments.rec_status=1;
    this.appointments.branch_id=this.shedule.branch_id;
    this.appointments.emp_id=this.shedule.employee_id;
    console.log(this.appointments);
    this.service.saveAppointment(this.appointments).subscribe(response => {
    });
    this.createNew=false;
    this.appiontmentDisplay(this.shedule.employee_id,this.shedule.branch_id);
  }
  customerSearch(val) {
    this.users.length=0;
    this.temp.length=0;
    this.searchCondition=false;
    this.noRecordsFound = false;
    if (val.length >= 3) {
      this.http.get(environment.host + 'users/search/' + val).subscribe(data => {
        this.temp.push(data);
        this.searchCondition=true;
        console.log(this.temp);
        if(this.temp[0]=== null){
          this.searchCondition=false;
          this.noRecordsFound = true;
          
        }
       else{
        this.users = this.temp.pop();
       }
      });
    } else{
      this.users.length=0;
    }
  }
  saveCustomer() {
    this.submitted = true;
    var data = {
      firstname: this.firstName,
      lastname: this.lastName,
      email_id: this.MailId,
      mobile: this.mobileNo,
      gender: this.gender,
      dob: this.DOB
    }
    this.http.post(environment.host + 'users', data).subscribe(data => {
    });
    this.firstName=this.searchValue;
    this.customerSearch(this.searchValue);
  }
  onSelect(item) {
    this.selectedOption = item;
    this.searchValue = this.selectedOption.firstname;
    this.appointments.user_id=this.selectedOption.user_id;
    this.searchCondition=false;
  }

}
