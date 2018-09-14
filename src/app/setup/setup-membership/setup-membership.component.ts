import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup-membership',
  templateUrl: './setup-membership.component.html',
  styleUrls: ['./setup-membership.component.css']
})
export class SetupMembershipComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }
}
