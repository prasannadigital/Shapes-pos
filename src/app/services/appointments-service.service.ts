import { Injectable } from '@angular/core';
import {Event} from '../model/event.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsServiceService {

  constructor() { }

  get(): Promise<Event[]>{
    return Promise.resolve([
        {id: "1", start_date: "2018-09-13 00:00", end_date: "2018-09-13 13:00", text: "Event 1"},
        {id: "2", start_date: "2018-09-15 00:00", end_date: "2018-09-15 13:00", text: "Event 2"},
    ]);
}
}
