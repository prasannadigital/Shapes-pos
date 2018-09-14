import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-required-field',
  templateUrl: './required-field.component.html',
  styleUrls: ['./required-field.component.css']
})
export class RequiredFieldComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}