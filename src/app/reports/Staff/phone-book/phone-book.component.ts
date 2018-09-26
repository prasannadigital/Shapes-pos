import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToReport() {
    this.router.navigate(['reports'])
  }
}
