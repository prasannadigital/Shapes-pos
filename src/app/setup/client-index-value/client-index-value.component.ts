import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-client-index-value',
  templateUrl: './client-index-value.component.html',
  styleUrls: ['./client-index-value.component.css']
})
export class ClientIndexValueComponent implements OnInit{

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }

}
