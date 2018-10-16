import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sales-by-service',
  templateUrl: './sales-by-service.component.html',
  styleUrls: ['./sales-by-service.component.css']
})
export class SalesByServiceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToReports(){
    this.router.navigate(['reports'])
  }
}
