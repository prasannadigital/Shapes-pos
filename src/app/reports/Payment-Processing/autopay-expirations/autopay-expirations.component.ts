import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-autopay-expirations',
  templateUrl: './autopay-expirations.component.html',
  styleUrls: ['./autopay-expirations.component.css']
})
export class AutopayExpirationsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToReport() {
    this.router.navigate(['reports'])
  }
}
