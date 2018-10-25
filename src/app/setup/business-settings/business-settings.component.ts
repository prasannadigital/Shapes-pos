import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SheduleServiceService } from 'src/app/services/shedule-service.service';
import * as moment from 'moment/moment';
import { BussinessSettingsService } from 'src/app/services/bussiness-settings.service';
import {SelectItem} from 'primeng/api';
import { MultiSelectModule } from 'primeng/multiselect';
import { environment } from 'src/environments/environment';
import { Http } from '@angular/http';
@Component({
  selector: 'app-business-settings',
  templateUrl: './business-settings.component.html',
  styleUrls: ['./business-settings.component.css']
})
export class BusinessSettingsComponent implements OnInit {
  packs: SelectItem[] = [];
  selectedPack: string[] = [];
  serviceData: any;
  startDate="";
  endDate="";
  holidayName="";
  selectedCats="";
  categorysData : any;
  public date1: any;
  public date2: any;
  serviceId = '';
  constructor(private http: Http,private service:BussinessSettingsService,private router:Router,private serviceData1: SheduleServiceService,) { }

  ngOnInit() {
    this.http.get(environment.host + 'categorys').subscribe(data => {
      console.log(data.json().result);
      this.serviceData = data.json().result;
      console.log(this.serviceData.length);
      for (let i = 0; i < this.serviceData.length; i++) {
        this.packs.push({ label: this.serviceData[i].category_name, value: { cat_id: this.serviceData[i].cat_id,category_name: this.serviceData[i].category_name} })
      }
    });
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }
  getStartDate() {
    let newDate = moment(this.date1).format('YYYY-MM-DD HH:mm').toString();
    this.startDate = newDate;
  }

  getEndDate() {
    let newDate1 = moment(this.date2).format('YYYY-MM-DD HH:mm').toString();
    this.endDate = newDate1;
  }
  saveHolidays() {
   // this.submitted = true;
    var data = {
      buss_start_date: this.startDate,
      buss_end_date: this.endDate,
      buss_holidayname: this.holidayName,
      buss_service_category:this.serviceId
    }
    //console.log(this.data)
  }
  getHolidays(){

  }
  deleteService(index) {
    this.selectedPack.splice(index, 1);
    this.getServiceId(this.selectedPack);
  }

  getServiceId(val) {
    this.serviceId = '';
    for (let i = 0; i < val.length; i++) {
      this.serviceId = this.serviceId + val[i].cat_id + " , ";
      console.log(this.serviceId);
    }
    this.serviceId = this.serviceId.substring(0, this.serviceId.length - 1);
  }
  onChange() {
    console.log(this.selectedPack);
    this.getServiceId(this.selectedPack);
  }
}


