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
  messageData:any=[];
  

  constructor(private router: Router, private service: NewsEventsServiceService) { }


  ngOnInit() {
    this.service.getTopMessage().subscribe(response=>{
      this.messageData=response.json();
      
     
    })
    
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
 updateMessage(val){
  console.log(val);
  var data={
    top_msg_id:val.top_msg_id,
    top_msg:val.top_msg    
  }
  console.log('****');
  console.log(data);
  this.service.editTopMessage(data).subscribe(response=>{
    console.log(response)
  })
 }


}
