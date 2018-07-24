import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToDashbaord(){
    this.router.navigate(['dashboard']);
  }
  
  redirectToManager(){
    this.router.navigate(['management']);
  }

  newTicket(){
    console.log("new ticket");
    this.router.navigate(['new-ticket']);
  }
}
