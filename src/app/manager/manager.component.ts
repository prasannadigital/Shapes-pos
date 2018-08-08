import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globals } from '../global/global-urls';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import { MembershipServiceService} from '../services/membership-service.service';
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
  addMembership: any = {
    'sub_cat_id': '',
    'cat_id': '',
    'membership_name': '',
    'membership_code': '',
    'membership_discount': '',
    'membership_price': '',
    'membership_validity_in_days': ''
  };
  catagroyData = new Array();
  sub_catagroyData = new Array();
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

  constructor(private service: MembershipServiceService,private http: HttpClient, private globals: Globals, private router: Router) {
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
    this.addMembership.cat_id="";
    this.addMembership.sub_cat_id="";
    this.addMembership.membership_name="";
    this.addMembership.membership_code="";
    this.addMembership.membership_discount="";
    this.addMembership.membership_price="";
    this.addMembership.membership_validity_in_days="";
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
  setSub_catagroy(cat_id: any): void {
    this.addMembership.cat_id= cat_id;
    this.service.getSub_CategoryList(this.addMembership.cat_id).subscribe(response => {
      this.sub_catagroyData = response.json();
      console.log( this.sub_catagroyData);
    }); 
   
}
setTitleTypeClient(sub_cat_id: any): void {
  this.addMembership.sub_cat_id= sub_cat_id;
}
}
