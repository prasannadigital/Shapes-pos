import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-business-settings',
  templateUrl: './business-settings.component.html',
  styleUrls: ['./business-settings.component.css']
})
export class BusinessSettingsComponent implements OnInit {


  constructor(private router:Router) { }

  ngOnInit() {
    
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }
}
