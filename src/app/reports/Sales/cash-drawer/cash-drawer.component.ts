import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cash-drawer',
  templateUrl: './cash-drawer.component.html',
  styleUrls: ['./cash-drawer.component.css']
})
export class CashDrawerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToReports(){
    this.router.navigate(['reports'])
  }
}
