import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-reports-cancellations',
  templateUrl: './client-reports-cancellations.component.html',
  styleUrls: ['./client-reports-cancellations.component.css']
})
export class ClientReportsCancellationsComponent implements OnInit {

  constructor(private router: Router) { }
  backToReport() {
    this.router.navigate(['reports'])
  }
  ngOnInit() {
  }

}
