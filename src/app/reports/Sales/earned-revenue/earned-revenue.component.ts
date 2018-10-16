import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-earned-revenue',
  templateUrl: './earned-revenue.component.html',
  styleUrls: ['./earned-revenue.component.css']
})
export class EarnedRevenueComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
  }
  backToReports(){
    this.router.navigate(['reports'])
  }
}
