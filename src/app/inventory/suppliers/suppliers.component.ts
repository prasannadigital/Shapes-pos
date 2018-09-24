import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToInventory() {
    this.router.navigate(['inventory']);
  }
  newSupplier(){
    this.router.navigate(['inventory/suppliers/new-suppliers']);
  }
}
