import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-reports-last-visit',
  templateUrl: './client-reports-last-visit.component.html',
  styleUrls: ['./client-reports-last-visit.component.css']
})
export class ClientReportsLastVisitComponent implements OnInit {

  constructor(private router: Router) { }
  backToReport() {
    this.router.navigate(['reports'])
  }

  ngOnInit() {
  }

}
