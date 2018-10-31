import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retails-sales-performance',
  templateUrl: './retails-sales-performance.component.html',
  styleUrls: ['./retails-sales-performance.component.css']
})
export class RetailsSalesPerformanceComponent implements OnInit {


  constructor(private router: Router) { }
  backToReport() {
    this.router.navigate(['reports'])
  }

  ngOnInit() {
  }

}
