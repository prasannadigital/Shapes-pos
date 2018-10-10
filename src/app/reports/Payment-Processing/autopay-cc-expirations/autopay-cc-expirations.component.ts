import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-autopay-cc-expirations',
  templateUrl: './autopay-cc-expirations.component.html',
  styleUrls: ['./autopay-cc-expirations.component.css']
})
export class AutopayCcExpirationsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToReport() {
    this.router.navigate(['reports'])
  }

}
