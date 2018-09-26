import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-report-time-clock',
  templateUrl: './report-time-clock.component.html',
  styleUrls: ['./report-time-clock.component.css']
})
export class ReportTimeClockComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToReport() {
    this.router.navigate(['reports'])
  }
}
