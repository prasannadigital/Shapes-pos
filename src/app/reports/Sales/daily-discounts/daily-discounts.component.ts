import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-daily-discounts',
  templateUrl: './daily-discounts.component.html',
  styleUrls: ['./daily-discounts.component.css']
})
export class DailyDiscountsComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
  }
  backToReports(){
    this.router.navigate(['reports'])
  }
}
