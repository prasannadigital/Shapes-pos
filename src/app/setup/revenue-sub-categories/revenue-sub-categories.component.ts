import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-revenue-sub-categories',
  templateUrl: './revenue-sub-categories.component.html',
  styleUrls: ['./revenue-sub-categories.component.css']
})
export class RevenueSubCategoriesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}
