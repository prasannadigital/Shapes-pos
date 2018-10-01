import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryServiceService } from '../../../services/inventory-service.service';
@Component({
  selector: 'app-new-purchase-order',
  templateUrl: './new-purchase-order.component.html',
  styleUrls: ['./new-purchase-order.component.css']
})
export class NewPurchaseOrderComponent implements OnInit {
  supplierData = new Array();
  supplierSelectedData=new Array();
  supplier:any={
    "supplierId":'',
    "supplierName":'',
    "paymentTerms":'',
    "supplierAddress":'',
  }

  constructor(private router:Router,private service:InventoryServiceService) { }

  ngOnInit() {
    this.service.getSuppliers().subscribe(res => {
      this.supplierData = res.json();
    })
  }
  backToInventory() {
    this.router.navigate(['inventory']);
  }
  orderSupplier(){
    this.router.navigate(['inventory/purchase-order-supplier']);
 
  }
  purchaseSuppliers(supplier_id:any){
    this.supplier.supplierId=supplier_id;
    this.service.getSelectedSupplier(this.supplier.supplierId).subscribe(response => {
      console.log(response.json());
      this.supplierSelectedData=response.json();
      localStorage.setItem('supplierdata',JSON.stringify(this.supplierSelectedData));
    });
  }  
}
