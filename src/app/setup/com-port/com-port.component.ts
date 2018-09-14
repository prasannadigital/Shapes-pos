import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-com-port',
  templateUrl: './com-port.component.html',
  styleUrls: ['./com-port.component.css']
})
export class ComPortComponent implements OnInit   {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}