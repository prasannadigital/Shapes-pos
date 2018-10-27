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
  locations: any = {
    'location_id': '',
    'loc_bussiness_address': '',
    'loc_address2': '',
    'loc_city': '',
    'loc_stateprovince': '',
    'loc_postal_code': '',
    'loc_phone': '',
    'loc_ext': '',
    'loc_contact_name': '',
    'loc_shipping_address': '',
    'loc_region': '',
    'loc_timezone': '',
    'loc_meet_your_client': '',
    'loc_business_desc': '',
    'loc_loc_desc': '',
    'loc_online_buss_address': '',
    'loc_online_phone': '',
    'loc_online_ext': '',
    'loc_online_contact_name': '',
    'loc_online_shipping_address':''
  };
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
  bussinessAddressData: any;
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
   this.getBussinessAddressForShapes();
  }
  getBussinessAddressForShapes(){
    this.service.getBussinessAddress().subscribe(res => {
      this.bussinessAddressData = res.json().result;
      console.log( this.bussinessAddressData)
      this.locations.location_id=this.bussinessAddressData[0].location_id;
      this.locations.loc_bussiness_address=this.bussinessAddressData[0].loc_bussiness_address;
      this.locations.loc_address2=this.bussinessAddressData[0].loc_address2;
      this.locations.loc_city=this.bussinessAddressData[0].loc_city;
      this.locations.loc_stateprovince=this.bussinessAddressData[0].loc_stateprovince;
      this.locations.loc_postal_code=this.bussinessAddressData[0].loc_postal_code;
      this.locations.loc_phone=this.bussinessAddressData[0].loc_phone;
      this.locations.loc_contact_name=this.bussinessAddressData[0].loc_contact_name;
      this.locations.loc_shipping_address=this.bussinessAddressData[0].loc_shipping_address;
      this.locations.loc_region=this.bussinessAddressData[0].loc_region;
      this.locations.loc_timezone=this.bussinessAddressData[0].loc_timezone;
      this.locations.loc_meet_your_client=this.bussinessAddressData[0].loc_meet_your_client;
      this.locations.loc_business_desc=this.bussinessAddressData[0].loc_business_desc;
      this.locations.loc_loc_desc=this.bussinessAddressData[0].loc_loc_desc;
      this.locations.loc_online_buss_address=this.bussinessAddressData[0].loc_online_buss_address;
      this.locations.loc_online_phone=this.bussinessAddressData[0].loc_online_phone;
      this.locations.loc_online_contact_name=this.bussinessAddressData[0].loc_online_contact_name;
      this.locations.loc_online_shipping_address=this.bussinessAddressData[0].loc_online_shipping_address;
    })
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
  saveBussinessAddress(){
    var data = {
      location_id: this.locations.location_id,
      loc_bussiness_address: this.locations.loc_bussiness_address,
      loc_address2: this.locations.loc_address2,
      loc_city:this.locations.loc_city,
      loc_stateprovince: this.locations.loc_stateprovince,
      loc_postal_code: this.locations.loc_postal_code,
      loc_phone: this.locations.loc_phone,
      loc_contact_name:this.locations.loc_contact_name,
      loc_shipping_address: this.locations.loc_shipping_address,
      loc_region: this.locations.loc_region,
      loc_timezone: this.locations.loc_timezone,
      loc_meet_your_client:this.locations.loc_meet_your_client,
      loc_business_desc: this.locations.loc_business_desc,
      loc_online_buss_address: this.locations.loc_online_buss_address,
      loc_online_phone: this.locations.loc_online_phone,
      loc_online_contact_name:this.locations.loc_online_contact_name,
      loc_online_shipping_address:this.locations.loc_online_shipping_address,
      loc_loc_desc:this.locations.locations.loc_loc_desc
    }
    this.service.editBussinessAddress(data).subscribe(data => {
    });
  }
}


