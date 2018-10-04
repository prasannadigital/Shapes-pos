import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryServiceService } from '../../services/inventory-service.service';
@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {
  purchaseOrderData = new Array();
  supplierData = new Array();
  supplier: any = {
    "supplierId": '',
    "supplierName": '',
    "paymentTerms": '',
    "supplierAddress": '',
  }
  purchase: any = {
    "purchaseOrderId": '',
    "supplierId": '',
  }
  supplierSelectedData = new Array();
  purchaseOrderSelectedData = new Array()
  constructor(private router: Router, private service: InventoryServiceService) { }

  ngOnInit() {
    this.service.getPurchaseOrder().subscribe(res => {
      this.purchaseOrderData = res.json();
    });
    this.service.getSuppliers().subscribe(res => {
      this.supplierData = res.json();
    })
  }
  backToInventory() {
    this.router.navigate(['inventory']);
  }
  newPurchase() {
    this.router.navigate(['inventory/new-purchase-order']);
  }
  purchaseSuppliers(supplier_id: any) {
    this.supplier.supplierId = supplier_id;
    this.service.getSelectedSupplier(this.supplier.supplierId).subscribe(response => {
      this.supplierSelectedData = response.json();
      console.log(this.supplierSelectedData);
    });
  }
  selectedPurchaseOrder(purchase_order_id: any) {
    this.purchase.purchaseOrderId = purchase_order_id;
    this.service.getSelectedPurchaseOrder(this.purchase.purchaseOrderId).subscribe(res => {
      this.purchaseOrderSelectedData = res.json();
      console.log(this.purchaseOrderSelectedData);
    })

  }

}
