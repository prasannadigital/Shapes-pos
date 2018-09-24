import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-inventory-ticket',
  templateUrl: './new-inventory-ticket.component.html',
  styleUrls: ['./new-inventory-ticket.component.css']
})
export class NewInventoryTicketComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToInventory() {
    this.router.navigate(['inventory']);
  }
}
