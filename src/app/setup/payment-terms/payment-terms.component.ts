import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment-terms',
  templateUrl: './payment-terms.component.html',
  styleUrls: ['./payment-terms.component.css']
})
export class PaymentTermsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}
