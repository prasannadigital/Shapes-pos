import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-client-per-stylist',
  templateUrl: './client-per-stylist.component.html',
  styleUrls: ['./client-per-stylist.component.css']
})
export class ClientPerStylistComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToReport() {
    this.router.navigate(['reports'])
  }
}
