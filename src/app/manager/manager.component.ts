import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globals } from '../global/global-urls';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import { MembershipServiceService } from '../services/membership-service.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { SheduleServiceService } from '../services/shedule-service.service';
import { GiftCardServiceService } from '../services/gift-card-service.service';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
// import * as jsPDF from 'jspdf';
// import { autoTable } from 'jspdf-autotable';
// import 'jspdf-autotable';
declare var jsPDF: any;
declare var $: any;

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})

export class ManagerComponent implements OnInit {
  addMembership: any = {
    'sub_cat_id': '',
    'cat_id': '',
    'membership_name': '',
    'membership_code': '',
    'membership_discount': '',
    'membership_price': '',
    'membership_validity_in_days': ''
  };

  soldAt = '';
  cardValue = '';
  discountPrice = '';
  cardName = '';
  sellOnline = '';
  setPrice = '';
  everyonePurchase = '';

  catagroyData = new Array();
  sub_catagroyData = new Array();
  categoryArray: any[];
  temp: any[] = [];
  temp3: any[] = [];
  subCategoryArray: any[];
  temp1: any[] = [];
  temp2: any[] = [];
  selectedCategoryObject: any;
  selectedSubCategoryObject: any;
  memName: string;
  memDesc: string;
  memImage: string;
  memDiscount: number;
  memPrice: number;
  memValidityDate: string;
  memCode: string;
  memberships: any;
  private isShowMembership = false;
  private isShowPackage = false;


  constructor(private service: MembershipServiceService, private giftcard: GiftCardServiceService, private schedule: SheduleServiceService, private http: HttpClient, private globals: Globals, private router: Router) {
    this.http.get(this.globals.api + 'categorys').subscribe(data => {
      this.temp.push([
        {
          "cat_id": 11,
          "category_name": "Make Up"
        },
        {
          "cat_id": 12,
          "category_name": "Facials"
        }
      ]);
      this.categoryArray = this.temp[0];
    });
    this.http.get(environment.host + 'sub-categorys').subscribe(data => {
      this.temp1.push(data);
      this.subCategoryArray = this.temp1[0];
    });
    this.http.get(environment.host + 'memberships').subscribe(memberShipData => {
      console.log(memberShipData)
      this.temp2.push(memberShipData);
      this.memberships = this.temp2[0];
      console.log(this.memberships)
    });
  }

  changeCategory(event: string): void {
    this.selectedCategoryObject = JSON.parse(event);
    console.log(this.selectedCategoryObject)
  }
  selectedValue: string;
  selectedOption: any;
  states: any[] = [];



  customerSearch(val) {
    this.giftcard.searchPlace(val).subscribe(data => {
      this.temp3.push(data.json());
      this.states = this.temp3.pop();  
      console.log(this.states);
    });

  }

  onSelect(event: TypeaheadMatch): void {
    console.log(event);
    this.selectedOption = event.item;
  }

  changeSubCategory(event: string): void {
    this.selectedSubCategoryObject = JSON.parse(event);
    console.log(this.selectedSubCategoryObject)
  }
  ngOnInit() {
    this.service.getCategoryList().subscribe(response => {
      this.catagroyData = response.json();
    });

  }


  downloadExcel() {
    console.log("Come here")
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      useBom: true,
      headers: ["First Name", "Last Name", "ID"]
    };
    new Angular5Csv(this.memberships, 'Memebership Info', options);
  }

  downloadPdf() {
    const doc = new jsPDF('p', 'pt');
    console.log(this.memberships)
    var rows = this.memberships;
    var columns = [
      { title: "Name", dataKey: "membership_name" },
      { title: "Description", dataKey: "membership_description" },
      { title: "Price", dataKey: "membership_price" },
      { title: "Discount", dataKey: "membership_discount" }
    ];
    doc.autoTable(columns, rows, {
      styles: {
        lineColor: [44, 62, 80],
        lineWidth: 0.75
      },
      columnStyles: {
        id: { fillColor: 255 }
      },
      tableLineWidth: 0.75,
      margin: { top: 60 },
      addPageContent: function (data) {
        doc.text("Memebership Info", 40, 30);
      }
    });
    // doc.text(JSON.stringify(this.memberships),10,10);
    doc.save('membership.pdf')
  }
  onEdit(val) {
    console.log(val)
    this.memName = val.membership_name;
    this.memDesc = val.membership_description;
    this.selectedCategoryObject = {
      "cat_id": 11,
      "category_name": "Make Up"
    };
    console.log(this.selectedCategoryObject)
  }

  addMembershipClick() {
    console.log(this.addMembership)
    this.service.saveMembershipDetails(this.addMembership).subscribe(response => {
      console.log(response);
    })
    $("#add-membership").modal('hide');
    this.addMembership.cat_id = "";
    this.addMembership.sub_cat_id = "";
    this.addMembership.membership_name = "";
    this.addMembership.membership_code = "";
    this.addMembership.membership_discount = "";
    this.addMembership.membership_price = "";
    this.addMembership.membership_validity_in_days = "";
  }
  id = 10;

  key: string = 'name';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;


  membershipClick() {
    this.isShowMembership = true;
    this.isShowPackage = false;
  }

  packageClick() {
    this.isShowMembership = false;
    this.isShowPackage = true;
  }

  productsClick() {

  }

  staffClick() {

  }


  showActiveMembershipClick() {
    this.router.navigate(['management-membership']);
  }

  showInactiveMembershipClick() {
    this.router.navigate(['inactive-membership'])

  }
  staffClockInandOut() {
    this.router.navigate(['staff-clock-in/out'])
  }
  VieworEditTimeClock() {
    this.router.navigate(['staff-view/edit-timeclock'])
  }
  StaffPermissions() {
    this.router.navigate(['staff-permissions'])
  }
  ScheduleView() {
    this.router.navigate(['staff-schedule-view'])
  }
  StaffMembers() {
    this.router.navigate(['staff-members'])
  }
  ScheduleAddorEdit() {
    this.router.navigate(['staff-schedule-add/edit'])
  }
  AddPackagesClick() {
    this.router.navigate(['add-packages'])
  }
  EditPackagesClick() {
    this.router.navigate(['edit-packages'])
  }
  AddPromotionsClick() {
    this.router.navigate(['add-promotions'])
  }
  EditPromotionsClick() {
    this.router.navigate(['edit-promotions'])
  }
  newsAndEventsClick() {
    this.router.navigate(['news-and-events'])
  }
  autoEmailClick() {
    this.router.navigate(['auto-emails'])
  }
  membershipSetupClick() {
    this.router.navigate(['membership-setup'])
  }
  cancelClick() {
    this.router.navigate(['cancel-group-lesson'])
  }
  newGiftClick() {
    this.router.navigate(['add-new-gift-card'])
  }
  editGiftClick() {
    this.router.navigate(['edit-gift-card'])
  }
  viewGiftClick() {
    this.router.navigate(['view-active-gift-card'])
  }
  redirectToViewGiftClick() {
    this.router.navigate(['view-active-gift-card'])
  }

  onlineGiftClick() {
    this.router.navigate(['online-gift-card'])
  }

  setSub_catagroy(cat_id: any): void {
    this.addMembership.cat_id = cat_id;
    this.service.getSub_CategoryList(this.addMembership.cat_id).subscribe(response => {
      this.sub_catagroyData = response.json();
      console.log(this.sub_catagroyData);
    });

  }
  setTitleTypeClient(sub_cat_id: any): void {
    this.addMembership.sub_cat_id = sub_cat_id;
  }

  saveGiftCard() {
    let sellOnlineCheckBox;
    let discountCheckbox;
    console.log(this.sellOnline)
    if (this.sellOnline.toString() == 'true') {
      sellOnlineCheckBox = 'y'
    } else {
      sellOnlineCheckBox = 'n'
    }
    console.log(this.discountPrice);
    if (this.discountPrice.toString() == 'true') {
      discountCheckbox = 'y'
    } else {
      discountCheckbox = 'n'
    }
          console.log(this.soldAt);
    var data: any = {
      giftcard_sold_at: this.soldAt,
      giftcard_value: this.cardValue,
      giftcard_discount_price: discountCheckbox,
      giftcard_name: this.cardName,
      giftcard_sell_online: sellOnlineCheckBox,
      giftcard_allow_staff_set_price: this.setPrice,
      giftcard_everyone_purchase: this.everyonePurchase
    }
    console.log(data);
    console.log(this.cardValue);
    console.log(sellOnlineCheckBox);
    console.log(discountCheckbox);
    console.log('*******')
    console.log(this.setPrice);
    this.giftcard.saveGiftCard(data).subscribe(data => {
      console.log(data);
    });

  }

}
