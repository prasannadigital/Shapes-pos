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
  // subCatId = "";
  // catId = "";
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

    if (this.sunday.toString() == 'true') { totaldays = totaldays + ' sun ,' }
    if (this.monday.toString() == 'true') { totaldays = totaldays + ' mon ,' }
    if (this.tuesday.toString() == 'true') { totaldays = totaldays + ' tue ,' }
    if (this.wednesday.toString() == 'true') { totaldays = totaldays + ' wed ,' }
    if (this.thursday.toString() == 'true') { totaldays = totaldays + ' thu ,' }
    if (this.friday.toString() == 'true') { totaldays = totaldays + ' fri ,' }
    if (this.saturday.toString() == 'true') { totaldays = totaldays + ' sat ,' }
    totaldays = totaldays.substring(0, totaldays.length - 1);
    
    console.log(totaldays)
    console.log("***************")
    console.log(this.allowOnlineSales)
    console.log(this.allowOnlineSales.toString() == 'true')
    if (this.allowOnlineSales.toString() == 'true') {
      allowonlinecheckbox = 'y'
    }
    else {
      allowonlinecheckbox = 'n'
    }
    console.log(allowonlinecheckbox)

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
    console.log(newDate);
    this.promotionActivationDate = newDate;
  }

  getExpirationDate() {
    let newDate1 = moment(this.promotionExpirationDate).format('YYYY-MM-DD').toString();
    console.log(newDate1);
    this.promotionExpirationDate = newDate1;
  }

  backToMembership() {
    this.router.navigate(['management']);
  }
}
