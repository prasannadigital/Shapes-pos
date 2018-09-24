import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-purchase-order',
  templateUrl: './new-purchase-order.component.html',
  styleUrls: ['./new-purchase-order.component.css']
})
export class NewPurchaseOrderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToInventory() {
    this.router.navigate(['inventory']);
  }
  orderSupplier(){
    this.router.navigate(['inventory/purchase-order-supplier']);
  }
}
