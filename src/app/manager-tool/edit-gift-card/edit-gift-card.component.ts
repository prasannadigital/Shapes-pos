import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
declare var $: any;
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { GiftCardServiceService } from '../../services/gift-card-service.service';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';


@Component({
  selector: 'app-edit-gift-card',
  templateUrl: './edit-gift-card.component.html',
  styleUrls: ['./edit-gift-card.component.css']
})
export class EditGiftCardComponent implements OnInit {
  msgs: Message[] = [];
  giftCardData: any = [];
  editData: any = [];
  getData: any = [];
  selectedValue: string;
  selectedOption: any;
  states: any[] = [];
  temp3: any[] = [];

  constructor(private router: Router,private messageService: MessageService, private service: GiftCardServiceService) { }

  ngOnInit() {
    this.getGiftCardData();
  }

  backToMembership() {
    this.router.navigate(['management']);
  }

  getGiftCardData() {
    this.service.getGiftCard().subscribe(giftCardData => {
      this.giftCardData = giftCardData.json();
      console.log(giftCardData);
    })
  }

  showSuccess() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'GiftCard Updated Successfully'});
}
  onSelect(event: TypeaheadMatch): void {
    console.log(event);
    this.selectedOption = event.item;
  }

  customerSearch(val) {
    this.service.searchPlace(val).subscribe(data => {
      this.temp3.push(data.json());
      this.states = this.temp3.pop();
      console.log(this.states);
    });
  }

  EditGiftCard(data) {
    this.editData = data;
    
    console.log(this.editData);
    if (this.editData.giftcard_discount_price == '0') {
      this.editData.giftcard_discount_price = '';
    }
    if (this.editData.giftcard_sell_online == '0') {
      this.editData.giftcard_sell_online = '';
    } else {
      this.editData.giftcard_sell_online = 'y';
    }  
  }

  cancelGiftCard(val, giftcard_discount_price){
   
    this.editData = val;
  }

  updateGiftCard(val) {
    let sellOnlineCheckBox;
    let discountCheckbox;
    if (val.giftcard_sell_online.toString() == 'true') {
      sellOnlineCheckBox = '1'
      this.editData.giftcard_sell_online = '1'
    }
    if (val.giftcard_sell_online.toString() == 'false') {
      sellOnlineCheckBox = '0'
      this.editData.giftcard_sell_online = '0'
    }
    console.log(val.giftcard_discount_price)
    if (val.giftcard_discount_price.toString() == 'true') {
      discountCheckbox = '1'
      this.editData.giftcard_discount_price = '1'
    }
    if (val.giftcard_discount_price.toString() == 'false') {
      discountCheckbox = '0'
      this.editData.giftcard_discount_price = '0'
    }

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
  
    this.service.saveGiftCard(data).subscribe(response => {
      console.log(response.json().giftcard_sell_online);
    })
    $("#add-new-giftcard").modal('hide');
  }

}