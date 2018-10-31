import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-change-log',
  templateUrl: './inventory-change-log.component.html',
  styleUrls: ['./inventory-change-log.component.css']
})
export class InventoryChangeLogComponent implements OnInit {

  constructor(private router: Router) { }
  backToReport() {
    this.router.navigate(['reports'])
  }

  ngOnInit() {
  }

}
