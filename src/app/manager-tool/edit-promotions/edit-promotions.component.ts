import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import * as moment from 'moment';

import { AddPromotionServiceService } from '../../services/add-promotion-service.service'
@Component({
  selector: 'app-edit-promotions',
  templateUrl: './edit-promotions.component.html',
  styleUrls: ['./edit-promotions.component.css']
})
export class EditPromotionsComponent implements OnInit {

  localData: any = [];
  editData: any = []
  // promotionsName='';
  // promotionCode='';
  // promotionDiscountDays='';
  // discountAmount='';
  // promotionActivationDate='';
  // promotionExpirationDate='';
  // promotionMaxUsers=''
  // allowOnlineSales='';
  // promotionItemTypes='';
  // promotion_id=''
  // promotion_valid_days='';

  sunday: boolean;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;

  newDate: any;
  newDate2: any;
  locationData = new Array();





  constructor(private router: Router, private service: AddPromotionServiceService) { }

  ngOnInit() {
    this.editPromotionGet();
  }

  backToPromotion() {
    this.router.navigate(['management']);
  }

  editPromotionGet() {
    this.service.editPromotionGet().subscribe(localData => {
      this.localData = localData.json();
      console.log(localData)
    })
  }




  editPromotion(data) {
    console.log(data);
    this.editData = data

    // this.promotionsName=this.editData.promotion_name;
    // this.promotionCode=this.editData.promotion_code;
    // this.promotionDiscountDays=this.editData.promotion_discount_type;
    // this.discountAmount=this.editData.promotion_price;
    // this.promotionActivationDate=this.editData.promotion_start_date;
    // this.promotionExpirationDate=this.editData.promotion_end_date;
    // this.promotionMaxUsers=this.editData.promotion_max_users;
    // this.allowOnlineSales=this.editData.promotion_allow_online_sale;
    // this.promotionItemTypes=this.editData.promotion_item_types;
    console.log(this.editData.promotion_valid_days)
    // console.log(this.editData.promotion_valid_days.includes("mon"))

    if (this.editData.promotion_valid_days.includes('sun')) {
      this.sunday = true;
    }
    else {
      this.sunday = false
    }

    if (this.editData.promotion_valid_days.includes('mon')) {
      this.monday = true
    }
    else {
      this.monday = false
    }
    if (this.editData.promotion_valid_days.includes('tue')) {
      this.tuesday = true
    }
    else {
      this.tuesday = false
    }
    if (this.editData.promotion_valid_days.includes('wed')) {
      this.wednesday = true
    }
    else {
      this.wednesday = false
    }
    if (this.editData.promotion_valid_days.includes('thu')) {
      this.thursday = true
    }
    else {
      this.thursday = false
    }
    if (this.editData.promotion_valid_days.includes('fri')) {
      this.friday = true
    }
    else {
      this.friday = false
    }
    if (this.editData.promotion_valid_days.includes('sat')) {
      this.saturday = true
    }
    else {
      this.saturday = false
    }




  }

  updatePromotion(val) {
    console.log(val)
    let allowonlinecheckbox = '';
    if (this.editData.promotion_allow_online_sale.toString() == 'false') {
      allowonlinecheckbox = 'n'
    }
    else {
      allowonlinecheckbox = 'y'
    }
    console.log(allowonlinecheckbox)


    let totaldays = '';

    if (this.sunday.toString() == 'true') { totaldays = totaldays + ' sun ,' }
    if (this.monday.toString() == 'true') { totaldays = totaldays + ' mon ,' }
    if (this.tuesday.toString() == 'true') { totaldays = totaldays + ' tue ,' }
    if (this.wednesday.toString() == 'true') { totaldays = totaldays + ' wed ,' }
    if (this.thursday.toString() == 'true') { totaldays = totaldays + ' thu ,' }
    if (this.friday.toString() == 'true') { totaldays = totaldays + ' fri ,' }
    if (this.saturday.toString() == 'true') { totaldays = totaldays + ' sat ,' }
    totaldays = totaldays.substring(0, totaldays.length - 1);

    console.log(totaldays)
    if (this.editData.promotion_valid_days.includes('sun')) {
      this.sunday = true;
    }
    else {
      this.sunday = false
    }

    if (this.editData.promotion_valid_days.includes('mon')) {
      this.monday = true
    }
    else {
      this.monday = false
    }
    if (this.editData.promotion_valid_days.includes('tue')) {
      this.tuesday = true
    }
    else {
      this.tuesday = false
    }
    if (this.editData.promotion_valid_days.includes('wed')) {
      this.wednesday = true
    }
    else {
      this.wednesday = false
    }
    if (this.editData.promotion_valid_days.includes('thu')) {
      this.thursday = true
    }
    else {
      this.thursday = false
    }
    if (this.editData.promotion_valid_days.includes('fri')) {
      this.friday = true
    }
    else {
      this.friday = false
    }
    if (this.editData.promotion_valid_days.includes('sat')) {
      this.saturday = true
    }
    else {
      this.saturday = false
    }


    var data = {
      promotion_id: val.promotion_id,
      promotion_name: val.promotion_name,
      promotion_code: val.promotion_code,
      promotion_price: val.promotion_price,
      promotion_discount_type: val.promotion_discount_type,
      // promotion_start_date:val.promotion_start_date,
      // promotion_end_date:val.promotion_end_date,
      promotion_valid_days: totaldays,
      promotion_max_users: val.promotion_max_users,
      promotion_allow_online_sale: allowonlinecheckbox,
      promotion_item_types: val.promotion_item_types

    }

    console.log(data)
    this.service.addPromotionPost(data).subscribe(response => {
      val.promotion_valid_days = response.json().promotion_valid_days;
      console.log("**********")
      console.log(response.json());
      console.log(val)
    })
  }
  getActivationDate() {
    let newDate = moment(this.editData.promotion_start_date).format('YYYY-MM-DD').toString();
    console.log(newDate);
    this.editData.promotion_start_date = newDate;
  }

  getExpirationDate() {
    let newDate1 = moment(this.editData.promotion_end_date).format('YYYY-MM-DD').toString();
    console.log(newDate1);
    this.editData.promotion_end_date = newDate1;
  }
}
