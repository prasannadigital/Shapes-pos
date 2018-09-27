import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild, ViewEncapsulation } from "@angular/core";
import "dhtmlx-scheduler";
import { } from "@types/dhtmlxscheduler";
import { AppointmentsServiceService } from '../services/appointments-service.service';
import { SheduleServiceService } from '../services/shedule-service.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  branchesData = new Array();
  locationData = new Array();
  empData = new Array();
  appiontmentData = new Array();
  shedule: any = {
    'startdate': '',
    'enddate': '',
    'branch_id': '',
    'employee_id': '',
    'employee_firstname': ''
  }
  @ViewChild("scheduler_here") schedulerContainer: ElementRef;


  constructor(private serviceData: SheduleServiceService,private service: AppointmentsServiceService) { }

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
  setBranch(branch_id: any): void {
    this.shedule.branch_id = branch_id;
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

}
