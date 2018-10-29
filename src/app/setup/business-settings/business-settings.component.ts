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
  contactLogos: any = {
    'contact_logo_tax_id': '',
    'con_bussiness_name_auto_email': '',
    'con_contact_email': '',
    'con_replay_address_auto_email': '',
    'con_shapes_brow_email': '',
    'con_business_listen': '',
    'con_state_province': '',
    'con_bussiness_website_link': '',
    'logo_shapesbrow_logo': '',
    'logo_mobile_logo': '',
    'logo_gitcard_logo': '',
    'tax_rate_name': '',
    'tax_sbb': '',
    'tax_online_store': '',
    'loc_business_desc': '',
    'tax_registration_sbb': '',
    'tax_registration_onlinestore': '',
    'contact_logo_tax_status': ''
  };
  empData = new Array();
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
  contactLogoData: any;
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
   this.getContactLogoForShapes();
   this.getHolidays();
  }
  getContactLogoForShapes(){
    this.service.getContactAddress().subscribe(res => {
      this.contactLogoData = res.json().result;
      console.log( this.contactLogoData)
      this.contactLogos.contact_logo_tax_id=this.contactLogoData[0].contact_logo_tax_id;
      this.contactLogos.con_bussiness_name_auto_email=this.contactLogoData[0].con_bussiness_name_auto_email;
      this.contactLogos.con_replay_address_auto_email=this.contactLogoData[0].con_replay_address_auto_email;
      this.contactLogos.con_contact_email=this.contactLogoData[0].con_contact_email;
      this.contactLogos.con_shapes_brow_email=this.contactLogoData[0].con_shapes_brow_email;
      this.contactLogos.con_business_listen=this.contactLogoData[0].con_business_listen;
      this.contactLogos.con_state_province=this.contactLogoData[0].con_state_province;
      this.contactLogos.con_bussiness_website_link=this.contactLogoData[0].con_bussiness_website_link;
      this.contactLogos.logo_shapesbrow_logo=this.contactLogoData[0].logo_shapesbrow_logo;
      this.contactLogos.logo_mobile_logo=this.contactLogoData[0].logo_mobile_logo;
      this.contactLogos.logo_gitcard_logo=this.contactLogoData[0].logo_gitcard_logo;
      this.contactLogos.tax_rate_name=this.contactLogoData[0].tax_rate_name;
      this.contactLogos.tax_sbb=this.contactLogoData[0].tax_sbb;
      this.contactLogos.tax_online_store=this.contactLogoData[0].tax_online_store;
      this.contactLogos.loc_business_desc=this.contactLogoData[0].loc_business_desc;
      this.contactLogos.tax_registration_sbb=this.contactLogoData[0].tax_registration_sbb;
      this.contactLogos.tax_registration_onlinestore=this.contactLogoData[0].tax_registration_onlinestore;
      this.contactLogos.contact_logo_tax_status=this.contactLogoData[0].contact_logo_tax_status;
    })
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
  saveContactLogos(){
    var data = {
      contact_logo_tax_id: this.contactLogos.contact_logo_tax_id,
      con_bussiness_name_auto_email:this.contactLogos.con_bussiness_name_auto_email,
      con_contact_email: this.contactLogos.con_contact_email,
      con_replay_address_auto_email: this.contactLogos.con_replay_address_auto_email,
      loc_city:this.contactLogos.loc_city,
      con_shapes_brow_email: this.contactLogos.con_shapes_brow_email,
      con_business_listen: this.contactLogos.con_business_listen,
      con_state_province: this.contactLogos.con_state_province,
      con_bussiness_website_link:this.contactLogos.con_bussiness_website_link,
      logo_shapesbrow_logo: this.contactLogos.logo_shapesbrow_logo,
      logo_mobile_logo: this.contactLogos.logo_mobile_logo,
      logo_gitcard_logo: this.contactLogos.logo_gitcard_logo,
      tax_rate_name:this.contactLogos.tax_rate_name,
      tax_sbb: this.contactLogos.tax_sbb,
      tax_online_store: this.contactLogos.tax_online_store,
      loc_business_desc: this.contactLogos.loc_business_desc,
      tax_registration_sbb:this.contactLogos.tax_registration_sbb,
      tax_registration_onlinestore:this.contactLogos.tax_registration_onlinestore,
      contact_logo_tax_status:this.locations.contactLogos.contact_logo_tax_status
    }
    this.service.editContactAddress(data).subscribe(data => {
    });
  }
  backToSetup(){
    this.router.navigate(['setup']);
  }
  getStartDate() {
    let day = this.date1.getDate();
    let month = this.date1.getMonth() + 1;
    let year = this.date1.getFullYear();
    let newDate = moment(this.date1).format('YYYY-MM-DD').toString();
    this.startDate = newDate;
    console.log( this.startDate)
  }

  getEndDate() {
    let day1 = this.date2.getDate();
    let month1 = this.date2.getMonth() + 1;
    let year1 = this.date2.getFullYear();
    let newDate1 = moment(this.date2).format('YYYY-MM-DD').toString();
    this.endDate = newDate1;
    console.log( this.endDate)
  }
  // getStartDate() {
  //   let newDate = moment(this.date1).format('YYYY-MM-DD HH:mm').toString();
  //   this.startDate = newDate;
  // }

  // getEndDate() {
  //   let newDate1 = moment(this.date2).format('YYYY-MM-DD HH:mm').toString();
  //   this.endDate = newDate1;
  // }
  saveHolidays() {
   // this.submitted = true;
    var data = {
      schedule_holiday_start_date: this.startDate,
      schedule_holiday_end_date: this.endDate,
      schedule_holiday_holidayname: this.holidayName,
      schedule_holiday_service_category:this.serviceId,
      schedule_holiday_status:1
    }
    this.service.editBussinessdays(data).subscribe(data => {})
    //console.log(this.data)
  }
  getHolidays(){
  this.service.getBussinessdays().subscribe(res =>{
    this.empData = res.json().result;
    console.log(this.empData)
  })
  }
  deleteService(index) {
    this.selectedPack.splice(index, 1);
    this.getServiceId(this.selectedPack);
  }

  getServiceId(val) {
    this.serviceId = '';
    for (let i = 0; i < val.length; i++) {
      this.serviceId = this.serviceId + val[i].cat_id + ",";
      console.log(this.serviceId);
    }
    this.serviceId = this.serviceId.substring(0, this.serviceId.length - 1);
  }
  onChange() {
    console.log(this.selectedPack);
    this.getServiceId(this.selectedPack);
  }
}


