import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-general-payment',
  templateUrl: './general-payment.component.html',
  styleUrls: ['./general-payment.component.css']
})
export class GeneralPaymentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}