import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-purchase-order-supplier',
  templateUrl: './purchase-order-supplier.component.html',
  styleUrls: ['./purchase-order-supplier.component.css']
})
export class PurchaseOrderSupplierComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToInventory() {
    this.router.navigate(['inventory']);
  }
}
