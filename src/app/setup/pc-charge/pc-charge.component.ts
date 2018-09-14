import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pc-charge',
  templateUrl: './pc-charge.component.html',
  styleUrls: ['./pc-charge.component.css']
})
export class PcChargeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}