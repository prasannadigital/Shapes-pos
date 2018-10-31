import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-reports-contact-logs',
  templateUrl: './client-reports-contact-logs.component.html',
  styleUrls: ['./client-reports-contact-logs.component.css']
})
export class ClientReportsContactLogsComponent implements OnInit {

  constructor(private router: Router) { }
  backToReport() {
    this.router.navigate(['reports'])
  }

  ngOnInit() {
  }

}
