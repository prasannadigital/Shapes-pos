import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-client-profile-fields',
  templateUrl: './client-profile-fields.component.html',
  styleUrls: ['./client-profile-fields.component.css']
})
export class ClientProfileFieldsComponent implements OnInit{

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}