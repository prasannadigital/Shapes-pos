import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-age',
  templateUrl: './inventory-age.component.html',
  styleUrls: ['./inventory-age.component.css']
})
export class InventoryAgeComponent implements OnInit {

  constructor(private router: Router) { }
  backToReport() {
    this.router.navigate(['reports'])
  }

  ngOnInit() {
  }

}
