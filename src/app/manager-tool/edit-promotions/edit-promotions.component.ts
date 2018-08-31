import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-edit-promotions',
  templateUrl: './edit-promotions.component.html',
  styleUrls: ['./edit-promotions.component.css']
})
export class EditPromotionsComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  backToMembership(){
    this.router.navigate(['management']);
  }
}
