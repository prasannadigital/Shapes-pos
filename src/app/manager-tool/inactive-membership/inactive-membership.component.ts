import { Component, OnInit } from '@angular/core';
import { ManagerServiceService } from '../../services/manager-service.service';
import { Http } from '@angular/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-inactive-membership',
  templateUrl: './inactive-membership.component.html',
  styleUrls: ['./inactive-membership.component.css']
})
export class InactiveMembershipComponent implements OnInit {
  inactivemembership: any = [];
  cols: any = [];

  constructor(private service: ManagerServiceService, private http: Http, private router: Router) { }

  ngOnInit() {
    this.service.getInactiveMembership().subscribe(inactivemembership => {
      this.inactivemembership = inactivemembership.json();
      this.cols = [
        { field: 'membership_name', header: 'membership_name' },
        { field: 'membership_code', header: 'membership_code' },
        { field: 'membership_price', header: 'membership_price' },
        { field: 'rec_status', header: 'rec_status' }
      ];
    })
    
  }
  backToMembership() {
    this.router.navigate(['management']);
  }

}
