import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryServiceService } from '../../services/inventory-service.service';
import * as moment from 'moment/moment';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {
  purchaseOrderData = new Array();
  supplierData = new Array();
  editOrder:any=[]
  public date1: any;
  public date2: any;
  public date3:any;
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
  deliveryDate = '';
  startDate: any;
  endDate: any;
  productData = new Array();
  supplierSelectedData = new Array();
  purchaseOrderSelectedData = new Array()
  constructor(private router: Router, private http: Http, private service: InventoryServiceService) { }

  ngOnInit() {
    this.http.get(environment.host + 'pur-orders').subscribe(res => {
      console.log(res.json().result);
      this.purchaseOrderData = res.json().result;
      
    });
    this.service.getSuppliers().subscribe(res => {
      this.supplierData = res.json().result;
    });
    this.service.getproduct().subscribe(res => {
      this.productData = res.json().result;
    });
  }
  backToInventory() {
    this.router.navigate(['inventory']);
  }
  newPurchase() {
    this.router.navigate(['inventory/new-purchase-order']);
  }
  redirectToEdit(){
    this.router.navigate(['inventory/edit-purchase-order']);
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
      this.purchaseOrderSelectedData = res.json().result;
      console.log(this.purchaseOrderSelectedData);
    })

  }
  getStartDate() {
    let newDate = moment(this.date1).format('YYYY-MM-DD').toString();
    this.startDate = newDate;
  }

  getEndDate() {

    let newDate1 = moment(this.date2).format('YYYY-MM-DD').toString();
    this.endDate = newDate1;
  }
  filterPurchaseOrder() {
    var url = '';
    if (this.startDate) {
      url = url + 'startdate=' + this.startDate;
    }
    if (this.endDate) {
      url = url + '&enddate=' + this.endDate
    }
    if (this.supplier.supplier_id) {
      url = url + '&source=' + this.supplier.supplier_id
    }
    this.service.getPurchaseOrder(url).subscribe(res => {
      console.log(res.json().result);
      console.log("*******")
      console.log(res.json().result.status);
      if (res.json().result.status == undefined) {
        this.purchaseOrderData = res.json().result;
        console.log(this.purchaseOrderData)
      } else {
        this.purchaseOrderData =res.json().result._body;
      }
    })
  }

  resetPurchaseOrder() {
    this.http.get(environment.host + 'pur-orders').subscribe(res => {
      this.purchaseOrderData = res.json().result;
    });
    this.startDate = "";
    this.endDate = "";
    this.supplier.supplier_id = "";
  }
  deleteOrder(val, index) {
    this.purchaseOrderData.splice(index, 1);
    console.log(val);
    var data: any = {
      supplier_id: val.supplierId,    
      status: 0
    }
    console.log(data);
    this.service.postPurchaseOrder(data).subscribe(res => {
      console.log(res.json().result);
    })
  }
  editPurchaseOrder(data,index){
    data.index = index;
    this.editOrder=data;
    let newDate1 = moment(this.editOrder.po_date).format('YYYY-MM-DD').toString();
    this.editOrder.po_date = newDate1;
    console.log(this.editOrder.po_date)
  }
  poDeliveryDate() {
    let newDate = moment(this.editOrder.po_date).format('YYYY-MM-DD').toString();
    this.deliveryDate = newDate;
    console.log(this.deliveryDate);
  }
  updatePurchaseOrder(val){
    var data: any = {
      purchase_order_id:val.purchase_order_id,
      supplier_id: val.supplier_id,
      po_date: this.deliveryDate,
      po_items: val.po_items,
      po_remarks:val.po_remarks,
      po_invoice_no:val.po_invoice_no,
      status: 1
    }
    console.log(data);
    this.service.postPurchaseOrder(data).subscribe(res => {
      console.log(res.json().result);
    })

  }
  PrintRecord = function () {
    this.printData();
  }
  printData() {
    var divToPrint = document.getElementById("tablerecords");
    var newWin = window.open("");
    newWin.document.write(divToPrint.outerHTML);
    newWin.print();
    newWin.close();
  }

}
