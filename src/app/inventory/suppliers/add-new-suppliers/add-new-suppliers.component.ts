import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {InventoryServiceService} from '../../../services/inventory-service.service';
@Component({
  selector: 'app-add-new-suppliers',
  templateUrl: './add-new-suppliers.component.html',
  styleUrls: ['./add-new-suppliers.component.css']
})
export class AddNewSuppliersComponent implements OnInit {
  supplierName:'';
  supplierPhone:'';
  supplierFax:'';
  supplierExt:'';
  supplierHomepage:'';
  supplierEmail:'';
  supplierPoints:'';
  supplierAddress:'';
  supplierContact:'';
  supplierTitle:'';
  supplierCity:'';
  supplierState:'';
  supplierZip:'';
  supplierTaxrate:'';
  supplierPaymentterms:'';
  supplierNotes:'';

  constructor(private router:Router,private service:InventoryServiceService) { }

  ngOnInit() {
  }
  backToInventory() {
    this.router.navigate(['inventory']);
  }
  addSupplier(){
    var data={
      supplier_name:this.supplierName,
      supplier_phone:this.supplierPhone,
      supplier_fax:this.supplierFax,
      supplier_ext:this.supplierExt,
      supplier_homepage:this.supplierHomepage,
      supplier_email:this.supplierEmail,
      supplier_rewardpoints:this.supplierPoints,
      supplier_address:this.supplierAddress,
      supplier_contact_name:this.supplierContact,
      supplier_title:this.supplierTitle,
      supplier_city:this.supplierCity,
      supplier_state:this.supplierState,
      supplier_zip:this.supplierZip,
      supplier_taxrate:this.supplierTaxrate,
      supplier_paymentterms:this.supplierPaymentterms,
      supplier_notes:this.supplierNotes
    }
    console.log(data);
    this.service.saveSuppliers(data).subscribe(data=>{
      console.log(data.json());
    })
  }

  cancleSupplier(){
  this.supplierName='';
  this.supplierPhone='';
  this.supplierFax='';
  this.supplierExt='';
  this.supplierHomepage='';
  this.supplierEmail='';
  this.supplierPoints='';
  this.supplierAddress='';
  this.supplierCity='';
  this.supplierState='';
  this.supplierZip='';
  this.supplierTaxrate='';
  this.supplierPaymentterms='';
  this.supplierNotes='';

  }
}
