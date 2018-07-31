import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';
import { Globals } from '../global/global-urls';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {
  firstName = '';
  lastName = '';
  DOB = '';
  gender = '';
  mobileNo = '';
  MailId = '';
  name = '';
  custFirstName = '';
  custLastName = ''; 
  custGender  = ''; 
  custNo = '';
  custEmail = '';
  custStatus = '';
  visits ;
  services ;
  products ;
  alls;
  public userDetails: FormGroup;
  
  constructor(private http: HttpClient, private globals: Globals, private router: Router) {
    setTheme('bs3');
    this.userDetails = new FormGroup({
      firstName: new FormControl(this.firstName, [Validators.required, Validators.minLength(6), Validators.maxLength(9)]),
      lastName: new FormControl(this.lastName, [Validators.required, Validators.minLength(6), Validators.maxLength(9)]),
      name: new FormControl(this.name, [Validators.required, Validators.minLength(6), Validators.maxLength(9)])
    })
  }

  ngOnInit() {
  }

  addNewCustomer() {

  }
  saveCustomer() {
    console.log("save")
    var data = {
      firstname: this.firstName,
      lastname: this.lastName,
      email_id: this.MailId,
      mobile: this.mobileNo,
      gender: this.gender,
      dob: this.DOB
    }
    console.log(data);
    this.http.post(this.globals.api+'users', data).subscribe(data => {
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
    this.custFirstName =  this.selectedOption.firstname;
    this.custLastName = this.selectedOption.lastname;
    this.custGender = this.selectedOption.gender;
    this.custNo = this.selectedOption.mobile;
    this.custEmail = this.selectedOption.email_id;
    this.custStatus = this.selectedOption.rec_status;    
  }

  membershipInfo(){
    console.log("HIIII")
    console.log(this.selectedOption.user_id)
    this.http.get(this.globals.api+'sales/visit/'+this.selectedOption.user_id).subscribe(data => {
      console.log(data);
    });
  }

  visitInfo(){
    this.http.get(this.globals.api+'sales/visit/'+this.selectedOption.user_id).subscribe(data => {
      console.log(data);
      this.visits = data;
      console.log(this.visits)
    });
  }

  allInfo(){
    console.log("HIIII")
    // console.log(this.selectedOption.user_id)
    this.http.get(this.globals.api+'sales/all-history/'+this.selectedOption.user_id).subscribe(data => {
      this.alls = data;
      console.log(data);
    });
  }

  productInfo(){
    console.log("HIIII")
    console.log(this.selectedOption.user_id)
    this.http.get(this.globals.api+'sales/product-history/'+this.selectedOption.user_id).subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }

  serviceInfo(){
    console.log("HIIII")
    // console.log(this.selectedOption.user_id)
    this.http.get(this.globals.api+'sales/service-history/'+this.selectedOption.user_id).subscribe(data => {
      console.log(data);
      this.services = data;
    });
  }

  customerSearch(val) {
    
    if (val.length >= 3) {     
      this.http.get(this.globals.api+'users/search/' + val).subscribe(data => {
        this.temp.push(data);
        this.states = this.temp.pop();  
        console.log(this.states);
      });
    }
  }
}