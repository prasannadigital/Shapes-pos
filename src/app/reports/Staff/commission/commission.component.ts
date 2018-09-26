import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.css']
})
export class CommissionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToReport(){
    this.router.navigate(['reports'])
  }
  
}
