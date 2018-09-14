import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-revenue-categories',
  templateUrl: './product-revenue-categories.component.html',
  styleUrls: ['./product-revenue-categories.component.css']
})
export class ProductRevenueCategoriesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}
