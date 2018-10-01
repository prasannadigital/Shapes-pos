import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inventory-tickets',
  templateUrl: './inventory-tickets.component.html',
  styleUrls: ['./inventory-tickets.component.css']
})
export class InventoryTicketsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToInventory() {
    this.router.navigate(['inventory']);
  }
  newInventory() {
    this.router.navigate(['inventory/new-inventory-ticket']);
  }
}
