import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-autopay-summary',
  templateUrl: './autopay-summary.component.html',
  styleUrls: ['./autopay-summary.component.css']
})
export class AutopaySummaryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToReport() {
    this.router.navigate(['reports'])
  }
}
