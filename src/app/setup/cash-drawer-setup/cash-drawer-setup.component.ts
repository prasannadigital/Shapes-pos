import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cash-drawer-setup',
  templateUrl: './cash-drawer-setup.component.html',
  styleUrls: ['./cash-drawer-setup.component.css']
})
export class CashDrawerSetupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}