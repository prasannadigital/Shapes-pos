import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-reports-entry-logs',
  templateUrl: './client-reports-entry-logs.component.html',
  styleUrls: ['./client-reports-entry-logs.component.css']
})
export class ClientReportsEntryLogsComponent implements OnInit {

  constructor(private router: Router) { }
  backToReport() {
    this.router.navigate(['reports'])
  }

  ngOnInit() {
  }

}
