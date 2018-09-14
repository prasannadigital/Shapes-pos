import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-referal-types',
  templateUrl: './referal-types.component.html',
  styleUrls: ['./referal-types.component.css']
})
export class ReferalTypesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}