import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-reports-memberships',
  templateUrl: './client-reports-memberships.component.html',
  styleUrls: ['./client-reports-memberships.component.css']
})
export class ClientReportsMembershipsComponent implements OnInit {

  constructor(private router: Router) { }
  backToReport() {
    this.router.navigate(['reports'])
  }

  ngOnInit() {
  }

}
