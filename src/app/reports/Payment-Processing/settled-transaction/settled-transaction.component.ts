import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-settled-transaction',
  templateUrl: './settled-transaction.component.html',
  styleUrls: ['./settled-transaction.component.css']
})
export class SettledTransactionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToReport() {
    this.router.navigate(['reports'])
  }
}
