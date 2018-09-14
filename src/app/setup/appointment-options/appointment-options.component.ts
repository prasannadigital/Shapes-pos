import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-appointment-options',
  templateUrl: './appointment-options.component.html',
  styleUrls: ['./appointment-options.component.css']
})
export class AppointmentOptionsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}
