import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-by-product-client-reports',
  templateUrl: './sales-by-product-client-reports.component.html',
  styleUrls: ['./sales-by-product-client-reports.component.css']
})
export class SalesByProductClientReportsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToReports(){
    this.router.navigate(['reports'])
  }

}
