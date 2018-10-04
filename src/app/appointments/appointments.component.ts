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
import { TypeaheadModule } from 'ngx-bootstrap';
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
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
    this.service.get()
      .subscribe((memberships) => {
        this.locationData = memberships.json();
        console.log(this.locationData);
        scheduler.parse(this.locationData, "json");
        console.log(this.locationData);
      });
      
  }
  showSuccess() {
    this.msgs = [];
      this.msgs.push({severity:'info', summary:'You have sucessfully added availability of Beauty Advisor on '+this.appointments.start_date+' at your location '});
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
    this.serviceData.getStaffAppointments(this.shedule.employee_id,this.shedule.branch_id).subscribe(res => {
      this.appiontmentData = res.json().data;
      console.log("hai"+this.appiontmentData);
      alert("Appointments"+this.appiontmentData);
    });
    
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
  }
  customerSearch(val) {
    if (val.length >= 3) {
      this.searchCondition=true;
      this.http.get(environment.host + 'users/search/' + val).subscribe(data => {
        //this.users.push(data);
        this.temp.push(data);
        console.log(this.temp);
        this.users = this.temp.pop();  
        console.log(this.users);
       // this. = this.temp.pop();
      });
    }
  }
  onSelect($event){
    this.appointments.user_id=this.selectedValue;
    console.log(this.model.user_id);
  }
}
