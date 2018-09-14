import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-client-types',
  templateUrl: './client-types.component.html',
  styleUrls: ['./client-types.component.css']
})
export class ClientTypesComponent implements OnInit{

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}