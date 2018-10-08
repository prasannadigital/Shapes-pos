import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  password = "";
  mailId = "";
  constructor(private router: Router) { }
  ngOnInit() {
    this.loginPopUp();
    if (sessionStorage.getItem('inventory-routing') == '"purchase"') {
      this.purchaseOrderClick()
    } else if (sessionStorage.getItem('inventory-routing') == '"supplier"') {
      console.log("click here");
      this.supplierClick();
    } else if (sessionStorage.getItem('inventory-routing') == '"inventory"') {
      this.inventoryTicketClick();
    } else if (sessionStorage.getItem('inventory-routing') == '"update"') {
      this.updateInventory();
    } else if (sessionStorage.getItem('inventory-routing') == '"reports"') {
      this.reportsClick();
    }
  }
  loginPopUp() {

    $('#myModal').modal('show');
  } 
  redirectToOrder() {
    this.router.navigate(['inventory/purchase-order']);
  }
  redirectToSupplier() {
    this.router.navigate(['inventory/suppliers']);
  }
  redirectToInventory() {
    this.router.navigate(['inventory/inventory-tickets']);
  }
  redirectToUpdate() {
    this.router.navigate(['inventory/physical-inventory']);
  }
  redirectToReportsInventory() {
    this.router.navigate(['inventory/reports']);
  }
  purchaseOrderClick() {
    sessionStorage.setItem('inventory-routing', JSON.stringify("purchase"));
    $(".purchase-order").trigger("click");
    this.removeClass();
    $(".purchase-order").addClass("active");

  }
  supplierClick() {
    sessionStorage.setItem('inventory-routing', JSON.stringify("supplier"));
    $(".supplier-info").trigger("click");
    this.removeClass();
    $(".supplier-info").addClass("active");
  }
  inventoryTicketClick() {
    sessionStorage.setItem('inventory-routing', JSON.stringify("inventory"));
    $(".inventory-info").trigger("click");
    this.removeClass();
    $(".inventory-info").addClass("active");

  }
  updateInventory() {
    sessionStorage.setItem('inventory-routing', JSON.stringify("update"));
    $(".update-info").trigger("click");
    this.removeClass();
    $(".update-info").addClass("active");

  }
  reportsClick() {
    sessionStorage.setItem('inventory-routing', JSON.stringify("reports"));
    $(".reports-info").trigger("click");
    this.removeClass();
    $(".reports-info").addClass("active");

  }

  removeClass() {
    $(".purchase-order").removeClass("active");
    $(".supplier-info").removeClass("active");
    $(".inventory-info").removeClass("active");
    $(".update-info").removeClass("active");
    $(".reports-info").removeClass("active");

  }
}
