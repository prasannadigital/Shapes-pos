import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sales-by-catagory',
  templateUrl: './sales-by-catagory.component.html',
  styleUrls: ['./sales-by-catagory.component.css']
})
export class SalesByCatagoryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToReports(){
    this.router.navigate(['reports'])
  }
}
