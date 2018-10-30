import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todays-sale',
  templateUrl: './todays-sale.component.html',
  styleUrls: ['./todays-sale.component.css']
})
export class TodaysSaleComponent implements OnInit {
  today: number;
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.getTimeAndDate();
    }, 1000);
  }
  getTimeAndDate() {
    this.today = Date.now();
  }
}
