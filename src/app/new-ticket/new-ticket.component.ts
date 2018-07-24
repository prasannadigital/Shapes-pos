import { Component, OnInit } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';
import { Globals } from '../global/global-urls';
// import { map } from 'rxjs/operators';
import {NewTicketServiceService } from '../services/new-ticket-service.service';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {
  newCustomerData:any={
    
  'firstName' : '',
  'lastName' : '',
  'DOB' : '',
  'gender' : '',
  'mobileNo' :'',
  'MailId' : '',
  'name' : '',
  'custFirstName' : '',
  'custLastName' : '', 
  'custGender' :'', 
  'custNo' : '',
  'custEmail' : '',
  'custStatus' : '',
  'visits':'' ,
  'services':'',
  'products':'' ,
  'alls':''
}
  public userDetails: FormGroup;
  
  constructor(private http: Http, private globals: Globals, private router: Router,private service:NewTicketServiceService ) {
    setTheme('bs3');
    this.userDetails = new FormGroup({
      firstName: new FormControl(this.newCustomerData.firstName, [Validators.required, Validators.minLength(6), Validators.maxLength(9)]),
      lastName: new FormControl(this.newCustomerData.lastName, [Validators.required, Validators.minLength(6), Validators.maxLength(9)]),
      name: new FormControl(this.newCustomerData.name, [Validators.required, Validators.minLength(6), Validators.maxLength(9)])
    })
  }

  ngOnInit() {
  }

  addNewCustomer() {

  }
  saveCustomer() {
    console.log("save")
    var data = {
      firstname: this.newCustomerData.firstName,
      lastname: this.newCustomerData.lastName,
      email_id: this.newCustomerData.MailId,
      mobile: this.newCustomerData.mobileNo,
      gender: this.newCustomerData.gender,
      dob: this.newCustomerData.DOB
    }
    console.log(data);
    //this.http.post(this.globals.api+'users', data)
    this.service.saveNewCustomer(this.newCustomerData).subscribe(data => {
      console.log("sucess")
      console.log(data);
    });
  }

  backToDashboard(){
    this.router.navigate(['dashboard']);
  }

  nextClick(){
    console.log("came herer ")
    this.router.navigate(['new-ticket-next-button']);
  }

  selectedValue: string;
  selectedOption: any;
  states: any[] = new Array();
  temp: any[] = new Array();

  onSelect(event: TypeaheadMatch): void {
    this.selectedOption = event.item;
    this.newCustomerData.custFirstName =  this.selectedOption.firstname;
    this.newCustomerData.custLastName = this.selectedOption.lastname;
    this.newCustomerData.custGender = this.selectedOption.gender;
    this.newCustomerData.custNo = this.selectedOption.mobile;
    this.newCustomerData.custEmail = this.selectedOption.email_id;
    this.newCustomerData.custStatus = this.selectedOption.rec_status;    
  }

  membershipInfo(){
    console.log("HIIII")
    console.log(this.selectedOption.user_id)
   // this.http.get(this.globals.api+'sales/visit/'+this.selectedOption.user_id)
   this.service.getMembershipInfo(this.selectedOption.user_id).subscribe(data => {
      console.log(data);
    });
  }

  visitInfo(){
    //this.http.get(this.globals.api+'sales/visit/'+this.selectedOption.user_id)
   this.service.getVisitInfo(this.selectedOption.user_id) .subscribe(data => {
      console.log(data);
      this.newCustomerData.visits = data;
      console.log(this.newCustomerData.visits)
    });
  }

  allInfo(){
    console.log("HIIII")
    // console.log(this.selectedOption.user_id)
   // this.http.get(this.globals.api+'sales/all-history/'+this.selectedOption.user_id)
    this.service.getAllInfo(this.selectedOption.user_id).subscribe(data => {
      this.newCustomerData.alls = data;
      console.log(data);
    });
  }

  productInfo(){
    console.log("HIIII")
    console.log(this.selectedOption.user_id)
    //this.http.get(this.globals.api+'sales/product-history/'+this.selectedOption.user_id)
   this.service.getProductInfo(this.selectedOption.user_id) .subscribe(data => {
      console.log(data);
      this.newCustomerData.products = data;
    });
  }

  serviceInfo(){
    console.log("HIIII")
    // console.log(this.selectedOption.user_id)
    this.http.get(this.globals.api+'sales/service-history/'+this.selectedOption.user_id)
    this.service.getServiceInfo(this.selectedOption.user_id).subscribe(data => {
      console.log(data);
      this.newCustomerData.services = data;
    });
  }

  customerSearch(val) {
    
    if (val.length >= 3) {     
     // this.http.get(this.globals.api+'users/search/' + val)
      this.service.getCustomerSearch(val).subscribe(data => {
      
        this.temp.push(JSON.parse(data.json()));
        this.states = this.temp.pop();  
        console.log(this.states);
      });
    }
  }
}