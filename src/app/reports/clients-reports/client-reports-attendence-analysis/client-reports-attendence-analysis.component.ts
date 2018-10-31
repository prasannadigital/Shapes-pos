import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-reports-attendence-analysis',
  templateUrl: './client-reports-attendence-analysis.component.html',
  styleUrls: ['./client-reports-attendence-analysis.component.css']
})
export class ClientReportsAttendenceAnalysisComponent implements OnInit {

  constructor(private router: Router) { }
  backToReport() {
    this.router.navigate(['reports'])
  }

  ngOnInit() {
  }

}
