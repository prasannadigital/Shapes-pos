import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-reports-mailing-lists',
  templateUrl: './client-reports-mailing-lists.component.html',
  styleUrls: ['./client-reports-mailing-lists.component.css']
})
export class ClientReportsMailingListsComponent implements OnInit {
  constructor(private router: Router) { }
  backToReport() {
    this.router.navigate(['reports'])
  }

  ngOnInit() {
  }

}
