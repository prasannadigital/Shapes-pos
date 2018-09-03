import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SheduleServiceService {

  constructor(private http: Http) { }

  getEmployee() {
    return this.http.get(environment.host + 'employees');
  }
  getSelectedEmployee(id: number) {
    return this.http.get(environment.host + 'employees/' + id);
  }
  getAllLocations() {
    return this.http.get(environment.host + 'branches');
  }
  getEmpAppointments(startdate: any, enddate: any, emp_id: number, branchid: number) {
    return this.http.get(environment.host + 'orders/appointment?startdate=' + startdate + '&enddate=' + enddate + '&emp_id=' + emp_id + '&branchid=' + branchid);
    // http://ec2-54-88-194-105.compute-1.amazonaws.com:3001/orders/appointment?startdate=2018-01-01&enddate=2018-11-11&emp_id=1&branchid=1
  }

}
