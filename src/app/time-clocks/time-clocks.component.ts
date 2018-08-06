import { Component, OnInit } from '@angular/core';
import { TimeClokServiceService} from '../services/time-clok-service.service'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { Globals } from '../global/global-urls';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'time-clocks',
  templateUrl: './time-clocks.component.html',
  styleUrls: ['./time-clocks.component.css']
})
export class TimeClocksComponent implements OnInit {

  constructor(private service:TimeClokServiceService,private http: HttpClient, private router: Router, private globals: Globals) { }

  today: number;
  
  

  

  ngOnInit() {
    this.getTimeAndDate();
            setInterval(() => {
                this.getTimeAndDate(); 
                }, 1000);
              
  }
 getTimeAndDate(){
  this.today = Date.now();
 }
 
 
 
}
