import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ratings-and-reviews',
  templateUrl: './ratings-and-reviews.component.html',
  styleUrls: ['./ratings-and-reviews.component.css']
})
export class RatingsAndReviewsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToReport() {
    this.router.navigate(['reports'])
  }
}
