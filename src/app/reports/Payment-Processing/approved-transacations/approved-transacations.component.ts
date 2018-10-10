import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-approved-transacations',
  templateUrl: './approved-transacations.component.html',
  styleUrls: ['./approved-transacations.component.css']
})
export class ApprovedTransacationsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToReport() {
    this.router.navigate(['reports'])
  }
}
