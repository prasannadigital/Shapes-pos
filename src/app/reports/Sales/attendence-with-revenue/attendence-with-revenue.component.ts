import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-attendence-with-revenue',
  templateUrl: './attendence-with-revenue.component.html',
  styleUrls: ['./attendence-with-revenue.component.css']
})
export class AttendenceWithRevenueComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToReports(){
    this.router.navigate(['reports'])
  }
}
