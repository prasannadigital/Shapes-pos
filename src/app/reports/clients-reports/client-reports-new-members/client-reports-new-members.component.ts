import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-reports-new-members',
  templateUrl: './client-reports-new-members.component.html',
  styleUrls: ['./client-reports-new-members.component.css']
})
export class ClientReportsNewMembersComponent implements OnInit {

  constructor(private router: Router) { }
  backToReport() {
    this.router.navigate(['reports'])
  }

  ngOnInit() {
  }

}
