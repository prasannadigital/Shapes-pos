import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-appointment-metrics',
  templateUrl: './appointment-metrics.component.html',
  styleUrls: ['./appointment-metrics.component.css']
})
export class AppointmentMetricsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToReport() {
    this.router.navigate(['reports'])
  }
}
