import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-staff-performance',
  templateUrl: './staff-performance.component.html',
  styleUrls: ['./staff-performance.component.css']
})
export class StaffPerformanceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToReport() {
    this.router.navigate(['reports'])
  }
}
