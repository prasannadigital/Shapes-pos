import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-reports-unpaid-visits',
  templateUrl: './client-reports-unpaid-visits.component.html',
  styleUrls: ['./client-reports-unpaid-visits.component.css']
})
export class ClientReportsUnpaidVisitsComponent implements OnInit {

  constructor(private router: Router) { }
  backToReport() {
    this.router.navigate(['reports'])
  }

  ngOnInit() {
  }

}
