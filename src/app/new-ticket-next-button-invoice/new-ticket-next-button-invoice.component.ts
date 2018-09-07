import { Component, OnInit } from '@angular/core';
import { Services } from '../services/common-services';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as _ from 'lodash';

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

  constructor(private services: Services, private http: HttpClient, ) {
    this.selectResult = JSON.parse(sessionStorage.getItem('selectedServices'));
    this.titleName = 'Service';
    this.http.get(environment.host + 'categorys').subscribe(data => {
      this.common = data;
    });
    this.subTotal();
  }

  showTable(val) {
    this.edited = !this.edited;
    if (val.product_name) {
      this.commonValues = Array.of(val);
    } else if (val.package_name) {
      this.commonValues = Array.of(val);
    } else if (val.promotion_name) {
      this.commonValues = Array.of(val);
    } else if (val.giftcard_name) {
      this.commonValues = Array.of(val);
    } else if (val.membership_name) {
      this.commonValues = Array.of(val);
    } else if (_.size(val) && val.category_name) {
      this.http.get(environment.host + 'services/category/' + val.cat_id).subscribe(data => {
        this.commonValues = Array.of(val);
      });
    }
  }

  addToBilling(_name, _price, _count) {
    var arr = [];
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
      this.selectResult = _final;
    }
    this.subTotal();
  }

  serviceClick() {
    this.titleName = 'Service';
    this.edited = true;
    this.http.get(environment.host + 'categorys').subscribe(data => {
      this.common = data;
    });
  }

  productClick() {
    this.titleName = 'Product';
    this.edited = true;
    this.http.get(environment.host + 'products').subscribe(data => {
      this.common = data;
    });
  }

  packagesClick() {
    this.titleName = 'Package';
    this.edited = true;
    this.http.get(environment.host + 'packages').subscribe(data => {
      this.common = data;
    });
  }

  membershipClick() {
    this.titleName = 'Membership';
    this.edited = true;
    this.http.get(environment.host + 'memberships').subscribe(data => {
      this.common = data;
    });
  }

  promotionsClick() {
    this.titleName = 'Promotions';
    this.edited = true;
    this.http.get(environment.host + 'promotions').subscribe(data => {
      this.common = data;
    });
  }

  giftcardClick() {
    this.titleName = 'GiftCards';
    this.edited = true;
    this.http.get(environment.host + 'giftcards').subscribe(data => {
      this.common = data;
    });
  }

  ngOnInit() {

  }

  display;

  subTotal() {
    let total: number = 0;
    let billData = JSON.parse(sessionStorage.getItem('selectedServices'));
    for (let i = 0; i < billData.length; i++) {
      total = total + billData[i].price;
      this.display = total;
    }
  }

  removeItem(val, index) {
    let _sessionVal = JSON.parse(sessionStorage.getItem('selectedServices'));
    _sessionVal.splice(index, 1);
    sessionStorage.setItem('selectedServices', JSON.stringify(_sessionVal));
    this.selectResult = _sessionVal;
    this.subTotal();
  }
}
