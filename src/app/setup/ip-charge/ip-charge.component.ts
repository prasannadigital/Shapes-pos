import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ip-charge',
  templateUrl: './ip-charge.component.html',
  styleUrls: ['./ip-charge.component.css']
})
export class IpChargeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}