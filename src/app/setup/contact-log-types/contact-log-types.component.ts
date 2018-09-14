import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-log-types',
  templateUrl: './contact-log-types.component.html',
  styleUrls: ['./contact-log-types.component.css']
})
export class ContactLogTypesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}