import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-prospect-stages',
  templateUrl: './prospect-stages.component.html',
  styleUrls: ['./prospect-stages.component.css']
})
export class ProspectStagesComponent implements OnInit  {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}