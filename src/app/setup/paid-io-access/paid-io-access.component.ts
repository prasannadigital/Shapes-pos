import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-paid-io-access',
  templateUrl: './paid-io-access.component.html',
  styleUrls: ['./paid-io-access.component.css']
})
export class PaidIoAccessComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}