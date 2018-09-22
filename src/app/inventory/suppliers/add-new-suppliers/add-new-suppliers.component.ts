import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-new-suppliers',
  templateUrl: './add-new-suppliers.component.html',
  styleUrls: ['./add-new-suppliers.component.css']
})
export class AddNewSuppliersComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToInventory() {
    this.router.navigate(['inventory']);
  }
}
