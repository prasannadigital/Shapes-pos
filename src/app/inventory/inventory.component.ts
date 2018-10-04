import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  purchaseOrderClick() {
    this.router.navigate(['inventory/purchase-order']);
  }
  supplierClick() {
    this.router.navigate(['inventory/suppliers']);
  }
  inventoryTicketClick() {
    this.router.navigate(['inventory/inventory-tickets']);
  }
  updateInventory() {
    this.router.navigate(['inventory/physical-inventory']);
  }
  reportsClick() {
    this.router.navigate(['inventory/reports']);
  }

}
