import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-on-hand',
  templateUrl: './inventory-on-hand.component.html',
  styleUrls: ['./inventory-on-hand.component.css']
})
export class InventoryOnHandComponent implements OnInit {


  constructor(private router: Router) { }
  backToReport() {
    this.router.navigate(['reports'])
  }

  ngOnInit() {
  }

}
