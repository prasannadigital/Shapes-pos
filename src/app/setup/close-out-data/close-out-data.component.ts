import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-close-out-data',
  templateUrl: './close-out-data.component.html',
  styleUrls: ['./close-out-data.component.css']
})
export class CloseOutDataComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}