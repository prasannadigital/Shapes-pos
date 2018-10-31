import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-reports-sales',
  templateUrl: './inventory-reports-sales.component.html',
  styleUrls: ['./inventory-reports-sales.component.css']
})
export class InventoryReportsSalesComponent implements OnInit {

  constructor(private router: Router) { }
  backToReport() {
    this.router.navigate(['reports'])
  }

  ngOnInit() {
  }

}
