import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {InventoryServiceService} from '../../services/inventory-service.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  

  constructor(private router:Router,private service:InventoryServiceService) { }

  ngOnInit() {
  }
  backToInventory() {
    this.router.navigate(['inventory']);
  }
  newSupplier(){
    this.router.navigate(['inventory/suppliers/new-suppliers']);
  }
  
}
