import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-reports-pricing-options',
  templateUrl: './client-reports-pricing-options.component.html',
  styleUrls: ['./client-reports-pricing-options.component.css']
})
export class ClientReportsPricingOptionsComponent implements OnInit {

  constructor(private router: Router) { }
  backToReport() {
    this.router.navigate(['reports'])
  }
  ngOnInit() {
  }

}
