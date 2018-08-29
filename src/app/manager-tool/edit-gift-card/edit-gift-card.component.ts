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
    if (this.editData.giftcard_sell_online.toString() == 'n') {
      this.editData.giftcard_sell_online = '';
    }

  }
  updateGiftCard(val){
    console.log(val);
    var data={
      giftcard_id:val.giftcard_id,
      giftcard_name:val.giftcard_name,
      giftcard_value:val.giftcard_value,
      giftcard_sell_online:val.giftcard_sell_online,
      giftcard_discount_price:val.giftcard_discount_price,
      giftcard_sold_at:val.giftcard_sold_at,
      giftcard_allow_staff_set_price:val.giftcard_allow_staff_set_price,
      giftcard_everyone_purchase:val.giftcard_everyone_purchase,
    }
    
    console.log('***********');
    console.log(data)
     this.service.saveGiftCard(data).subscribe(response=>{
       console.log(response);
     })
     $("#add-new-giftcard").modal('hide');
  }

}