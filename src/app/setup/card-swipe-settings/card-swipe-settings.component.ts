import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-swipe-settings',
  templateUrl: './card-swipe-settings.component.html',
  styleUrls: ['./card-swipe-settings.component.css']
})
export class CardSwipeSettingsComponent implements OnInit  {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}