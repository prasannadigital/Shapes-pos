import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cost-of-goods',
  templateUrl: './cost-of-goods.component.html',
  styleUrls: ['./cost-of-goods.component.css']
})
export class CostOfGoodsComponent implements OnInit {

  constructor(private router: Router) { }
  backToReport() {
    this.router.navigate(['reports'])
  }
  ngOnInit() {
  }
  
}

