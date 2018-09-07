import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AddPromotionServiceService } from '../../services/add-promotion-service.service'
import * as moment from 'moment';

@Component({
  selector: 'app-add-promotions',
  templateUrl: './add-promotions.component.html',
  styleUrls: ['./add-promotions.component.css']
})
export class AddPromotionsComponent implements OnInit {

  promotionName = "";
  promotionCode = "";
  discountAmount = "";
  promotionValidity = "";
  promotionServices: "";
  promotionOnOtherService: "";
  promotionActivationDate = "";
  promotionExpirationDate = "";
  promotionDiscountDays = "";
  promotionMaxUsers = "";
  promotionItemTypes = "";
  allowOnlineSales = "";

  validDays = '';
  sunday = '';
  monday = '';
  tuesday = '';
  wednesday = '';
  thursday = '';
  friday = '';
  saturday = '';

  public date1: any;
  public date2: any;
  locationData = new Array();

  constructor(private router: Router, private service: AddPromotionServiceService) { }

  ngOnInit() {
  }

  addPromotion() {
    let allowonlinecheckbox = '';
    let totaldays = '';
    if (this.sunday.toString() == 'true') { totaldays = totaldays + ' 0 ,' }
    if (this.monday.toString() == 'true') { totaldays = totaldays + ' 1 ,' }
    if (this.tuesday.toString() == 'true') { totaldays = totaldays + ' 2 ,' }
    if (this.wednesday.toString() == 'true') { totaldays = totaldays + ' 3 ,' }
    if (this.thursday.toString() == 'true') { totaldays = totaldays + ' 4 ,' }
    if (this.friday.toString() == 'true') { totaldays = totaldays + ' 5 ,' }
    if (this.saturday.toString() == 'true') { totaldays = totaldays + ' 6 ,' }
    totaldays = totaldays.substring(0, totaldays.length - 1);

    if (this.allowOnlineSales.toString() == 'true') {
      allowonlinecheckbox = '1'
    } else {
      allowonlinecheckbox = '0'
    }
    var data = {
      promotion_name: this.promotionName,
      promotion_code: this.promotionCode,
      promotion_price: this.discountAmount,
      promotion_discount_type: this.promotionDiscountDays,
      promotion_max_users: this.promotionMaxUsers,
      promotion_allow_online_sale: allowonlinecheckbox,
      promotion_item_types: this.promotionItemTypes,
      promotion_valid_days: totaldays,
      promotion_services: this.promotionServices,
      promotion_on_other_services: this.promotionOnOtherService,
      promotion_start_date: this.promotionActivationDate,
      promotion_end_date: this.promotionExpirationDate,
    }
    this.service.addPromotionPost(data).subscribe(response => {
      this.locationData = response.json();
    });
  }

  getActivationDate() {
    let newDate = moment(this.promotionActivationDate).format('YYYY-MM-DD').toString();
    this.promotionActivationDate = newDate;
  }

  getExpirationDate() {
    let newDate1 = moment(this.promotionExpirationDate).format('YYYY-MM-DD').toString();
    this.promotionExpirationDate = newDate1;
  }

  backToMembership() {
    this.router.navigate(['management']);
  }
}
