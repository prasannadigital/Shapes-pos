import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globals } from '../global/global-urls';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  


  constructor(private http: HttpClient, private router: Router, private globals: Globals) { 
    
  }

  ngOnInit() {
    
  }

  redirectToDashbaord(){
    this.router.navigate(['dashboard']);
  }
  
  
  
  newTicket(){
    console.log("new ticket");
    this.router.navigate(['new-ticket']);
  }

}
