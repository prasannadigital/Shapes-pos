import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globals } from '../global/global-urls';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

import { Router } from '@angular/router';
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
  categoryArray: any[];
  temp: any[] = [];
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

  constructor(private http: HttpClient, private globals: Globals, private router: Router) {
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
    this.http.get(this.globals.api + 'sub-categorys').subscribe(data => {
      this.temp1.push(data);
      this.subCategoryArray = this.temp1[0];
    });
    this.http.get(this.globals.api + 'memberships').subscribe(memberShipData => {
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

  changeSubCategory(event: string): void {
    this.selectedSubCategoryObject = JSON.parse(event);
    console.log(this.selectedSubCategoryObject)
  }
  ngOnInit() {
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
    var data = {
      cat_id: this.selectedCategoryObject.cat_id,
      sub_cat_id: this.selectedSubCategoryObject.sub_cat_id,
      membership_name: this.memName,
      membership_description: this.memDesc,
      membership_img: this.memImage,
      membership_discount: this.memDiscount,
      membership_price: this.memPrice,
      membership_validity_in_days: this.memValidityDate,
      membership_code: this.memCode,
      rec_status: 1,
      membership_services: null,
      branch_ids: null,
      is_global: null
    }
    console.log(data)
    this.http.post(this.globals.api + 'memberships', data).subscribe(memberShipData => {
      console.log(memberShipData)
      $("#add-membership").modal('hide');
    });
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

  }

}
