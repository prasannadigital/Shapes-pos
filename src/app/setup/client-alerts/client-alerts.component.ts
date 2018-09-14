import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-client-alerts',
  templateUrl: './client-alerts.component.html',
  styleUrls: ['./client-alerts.component.css']
})
export class ClientAlertsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}
