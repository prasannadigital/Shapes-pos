import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-additional-footer',
  templateUrl: './additional-footer.component.html',
  styleUrls: ['./additional-footer.component.css']
})
export class AdditionalFooterComponent implements OnInit  {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}