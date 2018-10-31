import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-reports-first-visit',
  templateUrl: './client-reports-first-visit.component.html',
  styleUrls: ['./client-reports-first-visit.component.css']
})
export class ClientReportsFirstVisitComponent implements OnInit {

  constructor(private router: Router) { }
  backToReport() {
    this.router.navigate(['reports'])
  }

  ngOnInit() {
  }

}
