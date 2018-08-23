import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-news-events',
  templateUrl: './news-events.component.html',
  styleUrls: ['./news-events.component.css']
})
export class NewsEventsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToMembership(){
    this.router.navigate(['management']);
  }

}
