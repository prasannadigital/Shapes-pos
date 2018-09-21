import { Injectable } from '@angular/core';
import {Event} from '../model/event.model';
import {Http} from "@angular/http";
import {ExtractData, HandleError} from "./service-helper.service";
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AppointmentsServiceService {

  private eventUrl = "http://ec2-54-88-194-105.compute-1.amazonaws.com:3001/apptest2";

    constructor(private http: Http) {}

    get() {
      return this.http.get("http://ec2-54-88-194-105.compute-1.amazonaws.com:3001/apptest2");
    }
  }

