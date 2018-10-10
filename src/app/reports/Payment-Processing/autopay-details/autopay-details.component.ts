import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-autopay-details',
  templateUrl: './autopay-details.component.html',
  styleUrls: ['./autopay-details.component.css']
})
export class AutopayDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToReport() {
    this.router.navigate(['reports'])
  }
}
