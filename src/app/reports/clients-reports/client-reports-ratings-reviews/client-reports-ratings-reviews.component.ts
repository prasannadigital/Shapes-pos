import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-reports-ratings-reviews',
  templateUrl: './client-reports-ratings-reviews.component.html',
  styleUrls: ['./client-reports-ratings-reviews.component.css']
})
export class ClientReportsRatingsReviewsComponent implements OnInit {

  constructor(private router: Router) { }
  backToReport() {
    this.router.navigate(['reports'])
  }

  ngOnInit() {
  }

}
