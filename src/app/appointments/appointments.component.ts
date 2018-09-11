import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild, ViewEncapsulation } from "@angular/core";
import "dhtmlx-scheduler";
import { } from "@types/dhtmlxscheduler";
import { AppointmentsServiceService } from '../services/appointments-service.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  @ViewChild("scheduler_here") schedulerContainer: ElementRef;


  constructor(private service: AppointmentsServiceService) { }

  ngOnInit() {
    scheduler.config.xml_date = "%Y-%m-%d %H:%i";
    scheduler.init(this.schedulerContainer.nativeElement);
    this.service.get()
      .then((data) => {
        scheduler.parse(data, "json");
        console.log(data);
      });
      
  }


}
