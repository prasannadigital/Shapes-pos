import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pay-rates',
  templateUrl: './pay-rates.component.html',
  styleUrls: ['./pay-rates.component.css']
})
export class PayRatesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToReport() {
    this.router.navigate(['reports'])
  }
}
