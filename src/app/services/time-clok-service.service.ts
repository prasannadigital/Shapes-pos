import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimeClokServiceService {

  constructor(private http: Http) { }

  public saveInandOutTime(time: any) {
    return this.http.post(environment.host + 'time-clocks', time)
  }
}
