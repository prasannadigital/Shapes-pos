import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
declare var $: any;
import { GiftCardServiceService } from '../../services/gift-card-service.service';
@Component({
  selector: 'app-edit-gift-card',
  templateUrl: './edit-gift-card.component.html',
  styleUrls: ['./edit-gift-card.component.css']
})
export class EditGiftCardComponent implements OnInit {

  giftCardData: any = [];
  editData: any = [];
  getData:any=[];
  cardName='';
  cardSoldAt='';
  cardValue='';
  discountPrice='';
  sellOnline='';
  setPrice='';
  everyonePurchase='';

  constructor(private router: Router, private service: GiftCardServiceService) { }

  ngOnInit() {
    this.getGiftCardData();
  }
  backToMembership() {
    this.router.navigate(['management']);
  }
  getGiftCardData() {
    this.service.getGiftCard().subscribe(giftCardData => {
      this.giftCardData = giftCardData.json();
      console.log(giftCardData)
    })
  }
  EditGiftCard(data) {
    console.log(data);
    this.editData = data;
    this.cardName=this.editData.giftcard_name;
    this.cardSoldAt=this.editData.giftcard_sold_at;
    this.cardValue=this.editData.giftcard_value;
    this.discountPrice=this.editData.giftcard_discount_price;
    this.sellOnline=this.editData.giftgitcard_sell_online;
    this.setPrice=this.editData.giftcard_allow_staff_set_price;
    this.everyonePurchase=this.editData.giftcard_everyone_purchase;

    console.log(this.editData.giftcard_discount_price)
    if (this.sellOnline.toString() == 'n') {
      this.sellOnline = '';
    }
    if (this.discountPrice.toString() == 'n') {
      this.discountPrice = '';
    }
   
  }

  cancelGiftCard(data){
    console.log(data);
    this.getData=data;
    console.log(this.getData);
    this.editData.giftcard_sold_at=this.getData.giftcard_sold_at;
   this.editData.giftcard_value=this.getData.giftcard_value;
  this.editData.giftcard_discount_price=this.getData.giftcard_discount_price;
  this.editData.giftcard_name=this.getData.editData.giftcard_name;
  this.editData.giftcard_sell_online=this.getData.giftcard_sell_online;

  }
  updateGiftCard(val) {
    let sellOnlineCheckBox;
    let discountCheckbox;
    if (val.giftcard_sell_online.toString() == 'true') {
      sellOnlineCheckBox = 'y'
      this.editData.giftcard_sell_online='y'
    } else {
      sellOnlineCheckBox = 'n'
      this.editData.giftcard_sell_online='n'
    }
    console.log(val.giftcard_discount_price)
    if (val.giftcard_discount_price.toString() == 'true') {
      discountCheckbox = 'y'
      this.editData.giftcard_discount_price='y'
    } else {
      discountCheckbox = 'n'
      this.editData.giftcard_discount_price='n'
    }
    
    console.log(val);
    var data = {
      giftcard_id: val.giftcard_id,
      giftcard_name: val.giftcard_name,
      giftcard_value: val.giftcard_value,
      giftcard_sell_online: sellOnlineCheckBox,
      giftcard_discount_price: discountCheckbox,
      giftcard_sold_at: val.giftcard_sold_at,
      giftcard_allow_staff_set_price: val.giftcard_allow_staff_set_price,
      giftcard_everyone_purchase: val.giftcard_everyone_purchase,
    }
    console.log('sell online');
    console.log(val.giftcard_sell_online);
    console.log(sellOnlineCheckBox);

    console.log('***********');
    console.log(data)
    this.service.saveGiftCard(data).subscribe(response => {
      console.log(response.json().giftcard_sell_online);
      // this.editData.giftcard_sell_online=response.json().giftcard_sell_online;
    })
    $("#add-new-giftcard").modal('hide');
  }

}