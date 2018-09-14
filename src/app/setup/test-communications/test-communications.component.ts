import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test-communications',
  templateUrl: './test-communications.component.html',
  styleUrls: ['./test-communications.component.css']
})
export class TestCommunicationsComponent implements OnInit  {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}