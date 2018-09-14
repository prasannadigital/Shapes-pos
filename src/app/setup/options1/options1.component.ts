import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-options1',
  templateUrl: './options1.component.html',
  styleUrls: ['./options1.component.css']
})
export class Options1Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}
