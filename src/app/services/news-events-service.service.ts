import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsEventsServiceService {

  constructor(private http:Http) { }

  public newsEventPost(data:any){
    return  this.http.post(environment.host+ 'news-events', data)
  }

}
