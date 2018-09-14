import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  backToInventory() {
    this.router.navigate(['inventory']);
  }
}
