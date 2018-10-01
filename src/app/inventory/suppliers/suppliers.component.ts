import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryServiceService } from '../../services/inventory-service.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  supplierData = new Array();
  selectedSupplierData: any = {}
  supplier: any = {
    "supplier_id": '',
    "supplier_name": '',
    "supplier_contact_name": '',
    "supplier_title": '',
    "supplier_phone": "",
    "supplier_fax": "",
    "supplier_ext": "",
    "supplier_homepage": "",
    "supplier_email": "",
    "supplier_rewardpoints": '',
    "supplier_address": '',
    "supplier_city": '',
    "supplier_state": '',
    "supplier_zip": '',
    "supplier_taxrate": '',
    "supplier_paymentterms": '',
    "supplier_notes": '',
  }

  editStyle = "hidden";

  constructor(private router: Router, private service: InventoryServiceService) { }

  ngOnInit() {
    this.service.getSuppliers().subscribe(res => {
      this.supplierData = res.json();
    })
  }
  backToInventory() {
    this.router.navigate(['inventory']);
  }
  newSupplier() {
    this.router.navigate(['inventory/suppliers/new-suppliers']);
  }

  setSuppliers(supplier_id: any) {
    this.supplier.supplier_id = supplier_id;
    this.service.getSelectedSupplier(this.supplier.supplier_id).subscribe(response => {
      console.log(response.json());
      this.selectedSupplierData = response.json();
      var selectedData = this.selectedSupplierData.pop();
      this.supplier.supplier_id = selectedData.supplier_id;
      console.log(this.supplier.supplier_id);
      this.supplier.supplier_name = selectedData.supplier_name;
      this.supplier.supplier_contact_name = selectedData.supplier_contact_name;
      this.supplier.supplier_title = selectedData.supplier_title;
      this.supplier.supplier_phone = selectedData.supplier_phone;
      this.supplier.supplier_fax = selectedData.supplier_fax;
      this.supplier.supplier_ext = selectedData.supplier_ext;
      this.supplier.supplier_homepage = selectedData.supplier_homepage;
      this.supplier.supplier_email = selectedData.supplier_email;
      this.supplier.supplier_rewardpoints = selectedData.supplier_rewardpoints;
      this.supplier.supplier_address = selectedData.supplier_address;
      this.supplier.supplier_city = selectedData.supplier_city;
      this.supplier.supplier_state = selectedData.supplier_state;
      this.supplier.supplier_zip = selectedData.supplier_zip;
      this.supplier.supplier_taxrate = selectedData.supplier_taxrate;
      this.supplier.supplier_paymentterms = selectedData.supplier_paymentterms;
      this.supplier.supplier_notes = selectedData.supplier_notes;
      this.editStyle = "visible";
    })

    
  }

  updateSupplier(val) {
    console.log(val);
    console.log(val.supplier_id)
    var data = {
      supplier_id: val.supplier_id,
      supplier_name: val.supplier_name,
      supplier_contact_name: val.supplier_contact_name,
      supplier_title: val.supplier_title,
      supplier_phone: val.supplier_phone,
      supplier_fax: val.supplier_fax,
      supplier_ext: val.supplier_ext,
      supplier_homepage: val.supplier_homepage,
      supplier_email: val.supplier_email,
      supplier_rewardpoints: val.supplier_rewardpoints,
      supplier_address: val.supplier_address,
      supplier_city: val.supplier_city,
      supplier_state: val.supplier_state,
      supplier_zip: val.supplier_zip,
      supplier_taxrate: val.supplier_taxrate,
      supplier_paymentterms: val.supplier_paymentterms,
      supplier_notes: val.supplier_notes
    }
    console.log(data);
    this.service.saveSuppliers(data).subscribe(res => {
      console.log(res.json())
    });
    this.editStyle = "hidden";
  }

}
