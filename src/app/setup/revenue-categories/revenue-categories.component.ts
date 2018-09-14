import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-revenue-categories',
  templateUrl: './revenue-categories.component.html',
  styleUrls: ['./revenue-categories.component.css']
})
export class RevenueCategoriesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}
