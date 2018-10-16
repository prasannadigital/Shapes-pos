import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sales-by-supliers',
  templateUrl: './sales-by-supliers.component.html',
  styleUrls: ['./sales-by-supliers.component.css']
})
export class SalesBySupliersComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
  }
  backToReports(){
    this.router.navigate(['reports'])
  }
}
