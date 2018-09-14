import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-suppliers-setup',
  templateUrl: './suppliers-setup.component.html',
  styleUrls: ['./suppliers-setup.component.css']
})
export class SuppliersSetupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}