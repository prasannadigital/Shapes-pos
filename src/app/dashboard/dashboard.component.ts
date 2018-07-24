import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  redirectToManager() {
    this.router.navigate(['management']);
  }

  newTicket() {
    console.log("new ticket");
    this.router.navigate(['new-ticket']);
  }
}
