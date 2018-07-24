import { Component, OnInit } from '@angular/core';
import { Services } from '../services/common-services';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Globals } from '../global/global-urls';
import * as _ from 'lodash';
import {NewTicketNextButtonInvoiceServiceService} from '../services/new-ticket-next-button-invoice-service.service';

@Component({
  selector: 'app-new-ticket-next-button-invoice',
  templateUrl: './new-ticket-next-button-invoice.component.html',
  styleUrls: ['./new-ticket-next-button-invoice.component.css']
})
export class NewTicketNextButtonInvoiceComponent implements OnInit {
  p: number = 1;
  common;
  titleName = '';
  temp: any[] = new Array();
  public edited = true;
  selectResult;
  commonValues;
  _subTypeOfService;
  constructor(private services: Services, private http: Http, private globals: Globals,private service:NewTicketNextButtonInvoiceServiceService) {
   
  }

  showTable(val) {
    this.edited = !this.edited;
    console.log(val)
    if (val.product_name) {
      this.commonValues = Array.of(val);
    } else if (val.package_name) {
      this.commonValues = Array.of(val);
    } else if (val.membership_name) {
      this.commonValues = Array.of(val);
    } else if (_.size(val) && val.category_name) {
      this.http.get(this.globals.api + 'services/category/' + val.cat_id).subscribe(data => {
        console.log(data)
        this.commonValues = Array.of(data);
      });
    }
  }

  addToBilling(_name, _price, _count) {
    var arr = [];
    console.log(_count);
    if (_count) {
      _count = Number(_count);
      _price = Number(_price);
      _price = _price * _count;
      arr.push({
        name: _name,
        price: _price,
        count: _count
      })
      let _sessionVal = JSON.parse(sessionStorage.getItem('selectedServices'));
      let _final = _.concat(_sessionVal, arr);
      sessionStorage.setItem('selectedServices', JSON.stringify(_final));
      console.log(_final);
      this.selectResult = _final;
    }
  }

  serviceClick() {
    this.titleName = 'Service';
    this.edited = true;
    //this.http.get(this.globals.api + 'categorys')
    this.service.getService().subscribe(data => {
      this.common = data;
    });
  }

  productClick() {
    this.titleName = 'Product';
    this.edited = true;
    //this.http.get(this.globals.api + 'products')
    this.service.getProduct().subscribe(data => {
      this.common = data;
    });
  }

  packagesClick() {
    this.titleName = 'Package';
    this.edited = true;
    //this.http.get(this.globals.api + 'packages')
    this.service.getPackage().subscribe(data => {
      this.common = data;
    });
  }

  membershipClick() {
    this.titleName = 'Membership';
    this.edited = true;
    this.http.get(this.globals.api + 'memberships')
   this.service.getMembership() .subscribe(data => {
      this.common = data;
    });
  }

  ngOnInit() {
    this.selectResult = JSON.parse(sessionStorage.getItem('selectedServices'));
    this.titleName = 'Service';
   // this.http.get(this.globals.api + 'categorys')
    this.service.getCategory().subscribe(data => {
      this.common = data;
    });
  }

  removeItem(val, index) {
    let _sessionVal = JSON.parse(sessionStorage.getItem('selectedServices'));
    _sessionVal.splice(index, 1);
    sessionStorage.setItem('selectedServices', JSON.stringify(_sessionVal));
    this.selectResult = _sessionVal;
  }
}
