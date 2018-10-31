import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-reports-account-balance',
  templateUrl: './client-reports-account-balance.component.html',
  styleUrls: ['./client-reports-account-balance.component.css']
})
export class ClientReportsAccountBalanceComponent implements OnInit {

  constructor(private router: Router) { }
  backToReport() {
    this.router.navigate(['reports'])
  }

  ngOnInit() {
  }

}
