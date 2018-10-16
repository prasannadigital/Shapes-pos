import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sales-by-rep',
  templateUrl: './sales-by-rep.component.html',
  styleUrls: ['./sales-by-rep.component.css']
})
export class SalesByRepComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToReports(){
    this.router.navigate(['reports'])
  }
}
