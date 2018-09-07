import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import{FooterServiceService} from '../services/footer-service.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  selectedValue: string;
  selectedOption: any;
  product: any[] = [];
  temp: any[] = [];

  constructor(private router: Router,private service:FooterServiceService) { }

  ngOnInit() {
  }

  newTicket() {
    this.router.navigate(['new-ticket']);
  }

  customerSearch(val) {
    if(val.length >= 2){
    this.service.searchPrice(val).subscribe(data => {
      this.temp.push(data.json());
      this.product = this.temp.pop();
      console.log(this.product);
    });
  } else{
    this.product=[];
  }
  }
  
}
