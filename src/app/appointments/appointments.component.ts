import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  count: number = 0;
  temp: any = [];
  _style: Object;
  tempClass: any = [];
  public background_color = "124px";

  constructor() { }

  ngOnInit() {
  }
  
  setColor(val) {
    console.log(val)
    this.count = this.count + 1;
    if (this.count == 1) {
      this.temp[0] = val;
    }

    if (this.count == 2) {
      this.temp[1] = val;
      if (this.temp[1] > this.temp[0]) {
        console.log("true")
        for (let i = this.temp[0]; i <= this.temp[1]; i++) {
          this.tempClass[i] = true;
        }
      } else {
        console.log("false")
        for (let i = this.temp[1]; i <= this.temp[0]; i++) {
          this.tempClass[i] = true;
        }
      }
    }

  }

}
