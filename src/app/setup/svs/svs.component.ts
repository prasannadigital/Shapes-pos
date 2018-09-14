import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-svs',
  templateUrl: './svs.component.html',
  styleUrls: ['./svs.component.css']
})
export class SvsComponent implements OnInit  {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}