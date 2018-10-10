import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-voidedorrejected',
  templateUrl: './voidedorrejected.component.html',
  styleUrls: ['./voidedorrejected.component.css']
})
export class VoidedorrejectedComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToReport() {
    this.router.navigate(['reports'])
  }
}
