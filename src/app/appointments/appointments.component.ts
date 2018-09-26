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
  locationData = new Array();
  empData = new Array();
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
      this.locationData = response.json();
      console.log("ghdsgfhgsdhf"+this.locationData)
    });
    this.serviceData.getEmployee().subscribe(response => {
      this.empData = response.json();
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


}
