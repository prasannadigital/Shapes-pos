import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-swipe-device',
  templateUrl: './card-swipe-device.component.html',
  styleUrls: ['./card-swipe-device.component.css']
})
export class CardSwipeDeviceComponent implements OnInit  {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}