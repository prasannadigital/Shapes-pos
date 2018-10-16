import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manage-online-orders',
  templateUrl: './manage-online-orders.component.html',
  styleUrls: ['./manage-online-orders.component.css']
})
export class ManageOnlineOrdersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToReports(){
    this.router.navigate(['reports'])
  }
}
