import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-membership-reciept',
  templateUrl: './membership-reciept.component.html',
  styleUrls: ['./membership-reciept.component.css']
})
export class MembershipRecieptComponent implements OnInit  {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}