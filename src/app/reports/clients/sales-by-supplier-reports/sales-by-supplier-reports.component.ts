import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-by-supplier-reports',
  templateUrl: './sales-by-supplier-reports.component.html',
  styleUrls: ['./sales-by-supplier-reports.component.css']
})
export class SalesBySupplierReportsComponent implements OnInit {

 
  constructor(private router: Router) { }
  backToReport() {
    this.router.navigate(['reports'])
  }

  ngOnInit() {
  }

}
