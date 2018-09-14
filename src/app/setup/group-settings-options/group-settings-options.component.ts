import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-group-settings-options',
  templateUrl: './group-settings-options.component.html',
  styleUrls: ['./group-settings-options.component.css']
})
export class GroupSettingsOptionsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }
}
