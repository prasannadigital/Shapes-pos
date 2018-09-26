import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pay-roll',
  templateUrl: './pay-roll.component.html',
  styleUrls: ['./pay-roll.component.css']
})
export class PayRollComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToReport(){
    this.router.navigate(['reports'])
  }
}
