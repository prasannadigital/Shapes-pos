import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sales-gift-cards',
  templateUrl: './sales-gift-cards.component.html',
  styleUrls: ['./sales-gift-cards.component.css']
})
export class SalesGiftCardsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToReports(){
    this.router.navigate(['reports'])
  }
}
