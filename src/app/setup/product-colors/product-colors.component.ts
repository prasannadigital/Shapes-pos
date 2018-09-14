import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-colors',
  templateUrl: './product-colors.component.html',
  styleUrls: ['./product-colors.component.css']
})
export class ProductColorsComponent implements OnInit{

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}
