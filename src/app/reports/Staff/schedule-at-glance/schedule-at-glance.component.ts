import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-schedule-at-glance',
  templateUrl: './schedule-at-glance.component.html',
  styleUrls: ['./schedule-at-glance.component.css']
})
export class ScheduleAtGlanceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToReport() {
    this.router.navigate(['reports'])
  }
}
