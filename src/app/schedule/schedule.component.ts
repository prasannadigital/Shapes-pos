import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {SheduleServiceService} from '../services/shedule-service.service';
import * as moment from 'moment/moment';
@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  public date1:any;
  public date2:any;
  cols:any[];
  selectedEmpName:string;
  titleStyle="hidden";
  shedule:any={
   'startdate':'',
   'enddate':'',
   'branch_id':'',
   'employee_id':'',
   'employee_name':''
  }
  selectedEmpData:any={
    'employee_name':''
   }
  locationData = new Array();
  empData = new Array();
  appointmentsData = new Array();
  constructor(private service: SheduleServiceService,private messageService: MessageService) { }

  ngOnInit() {
    this.service.getAllLocations().subscribe(response => {
      this.locationData = response.json();
    }); 
    this.service.getEmployee().subscribe(response => {
      this.empData = response.json();
    }); 
    
  }
  showSuccess() {
    this.messageService.add({key: 'tl',severity:'success', summary: 'Success Message', detail:'Order submitted'});
}
getStartDate(){
  let day = this.date1.getDate();
  let month = this.date1.getMonth()+1;
  let year =this.date1.getFullYear();
  let newDate = moment(this.date1).format('YYYY-MM-DD').toString();
  console.log(newDate);
  this.shedule.startdate  = newDate;
}

getEndDate(){
  let day1 = this.date2.getDate();
  let month1 = this.date2.getMonth()+1;
  let year1 =this.date2.getFullYear();
  let newDate1 = moment(this.date2).format('YYYY-MM-DD').toString();
  console.log(newDate1);
  this.shedule.enddate=newDate1;
}
getShedule(){
  console.log(this.shedule);
  this.service.getEmpAppointments(this.shedule.startdate,this.shedule.enddate,this.shedule.employee_id,this.shedule.branch_id).subscribe(response => {
  this.appointmentsData = response.json();
   this.titleStyle="visible";
  console.log(this.appointmentsData);
}); 
}
setStaff(employee_id: any,employee_name:any): void {
  this.shedule.employee_id= employee_id;
  this.service.getSelectedEmployee(this.shedule.employee_id).subscribe(response => {
    this.selectedEmpData = response.json();
    var data =this.selectedEmpData.pop();
    this.selectedEmpName=data.employee_name;
   console.log(data.employee_name);
   console.log(this.selectedEmpName);
});
}
setBranch(branch_id: any): void {
  this.shedule.branch_id= branch_id;
}
}
