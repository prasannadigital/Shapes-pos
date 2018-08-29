import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NewsEventsServiceService } from '../../services/news-events-service.service'
import * as moment from 'moment';

@Component({
  selector: 'app-news-events',
  templateUrl: './news-events.component.html',
  styleUrls: ['./news-events.component.css']
})
export class NewsEventsComponent implements OnInit {
  eventTopMessage = "";
  eventName = "";
  eventDescription = "";
  eventLink = "";
  eventStartDate = "";
  eventEndDate = "";

  public date1: any;
  public date2: any;

  locationData = new Array();

  

  constructor(private router: Router, private service: NewsEventsServiceService) { }


  ngOnInit() {
  }

  addEventNews() {
    
    var data = {
      event_topname: this.eventTopMessage,
      event_name: this.eventName,
      event_desc: this.eventDescription,
      event_link: this.eventLink,
      event_startdate: this.eventStartDate,
      event_enddate: this.eventEndDate
      
    }
    this.service.newsEventPost(data).subscribe(response => {
      this.locationData = response.json();
      this.eventTopMessage = '';
      this.eventName='';
      this.eventDescription='';
      this.eventLink='';
      this.eventStartDate='';
      this.eventEndDate='';
      console.log(this.locationData)
      
    });
  }

  getEventStartDate() {
    let newDate = moment(this.eventStartDate).format('YYYY-MM-DD').toString();
    console.log(newDate);
    this.eventStartDate = newDate;
  }

  getEventEndDate() {
    let newDate1 = moment(this.eventEndDate).format('YYYY-MM-DD').toString();
    console.log(newDate1);
    this.eventEndDate = newDate1;
  }

  backToMembership() {
    this.router.navigate(['management']);
  }

}
