import { Component, OnInit } from '@angular/core';
import {MultiSelectModule} from 'primeng/multiselect';
import {SelectItem} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
 
  constructor(private router:Router) {
  }

  ngOnInit() {
  }
  businessSettingsClick(){
    this.router.navigate(['setup/business-settings']);
  }
  appointmentOptionsClick() {
    this.router.navigate(['setup/appointment-options']);
  }
  groupSettingsClick(){
    this.router.navigate(['setup/group-setting-options'])
  }
  memberSetupClick(){
    this.router.navigate(['setup/membership-setup'])
  }
  closeOutDataClick(){
    this.router.navigate(['setup/close-out-data'])
  }
  paymentMethodsClick(){
    this.router.navigate(['setup/payment-methods'])
  }
  productRevenueCategoriesClick(){
    this.router.navigate(['setup/product-revenue-categories'])
  }
  revenueCategoriesClick(){
    this.router.navigate(['setup/revenue-categories'])
  }
  revenueSubCategoriesClick(){
    this.router.navigate(['setup/revenue-sub-categories'])
  }
  paymentTermsClick(){
    this.router.navigate(['setup/payment-terms'])
  }
  productColorsClick(){
    this.router.navigate(['setup/product-colors'])
  }
  productSizesClick(){
    this.router.navigate(['setup/product-sizes'])
  }
  suppliersClick(){
    this.router.navigate(['setup/suppliers'])
  }
  clientAlertClick(){
    this.router.navigate(['setup/client-alerts'])
  }
  newRelationshipClick(){
    this.router.navigate(['setup/add-new-relationship'])
  }
  indexValueClick(){
    this.router.navigate(['setup/client-index-value'])
  }
  clientTypesClick(){
    this.router.navigate(['setup/client-types'])
  }
  customFieldsClick(){
    this.router.navigate(['setup/client-profile-custom-fields'])
  }
  clientStatusClick(){
    this.router.navigate(['setup/client-status'])
  }
  contactLogClick(){
    this.router.navigate(['setup/contact-log-types'])
  }
  stagesClick(){
    this.router.navigate(['setup/prospect-stages'])
  }
  referalClick(){
    this.router.navigate(['setup/referal-types'])
  }
  requiredClick(){
    this.router.navigate(['setup/required-field'])
  }
  cardSwipeDeviceClick(){
    this.router.navigate(['setup/card-swipe-device'])
  }
  cardSwipeSettingsClick(){
    this.router.navigate(['setup/card-swipe-settings'])
  }
  comPortClick(){
    this.router.navigate(['setup/com-port'])
  }
  testCommunicationsClick(){
    this.router.navigate(['setup/test-communications'])
  }
  generalClick(){
    this.router.navigate(['setup/general'])
  }
  ipChargeClick(){
    this.router.navigate(['setup/ip-charge'])
  }
  monetraClick(){
    this.router.navigate(['setup/monetra'])
  }
  paidAccessCodeClick(){
    this.router.navigate(['setup/paid-io-access'])
  }
  pcChargeClick(){
    this.router.navigate(['setup/pc-charge'])
  }
  positionsClick(){  
    this.router.navigate(['setup/positions'])
  }
  sVsClick(){
    this.router.navigate(['setup/svs'])
  }
  cashDrawerSetupClick(){
    this.router.navigate(['setup/cash-drawer-setup'])
  }
  additionalFooterClick(){
    this.router.navigate(['setup/additional-footer'])
  }
  membershipRecieptClick(){
    this.router.navigate(['setup/membership'])
  }
  customHeaderClick(){
    this.router.navigate(['setup/custom-header'])
  }
  newCustomFootClick(){
    this.router.navigate(['setup/new-custom-footer'])
  }
  defaultFooterClick(){
    this.router.navigate(['setup/default-footer'])
  }
  options1Click(){
    this.router.navigate(['setup/option1'])
  }
  hardwareClick(){
    this.router.navigate(['setup/hardware'])
  }
  options2Click(){
    this.router.navigate(['setup/option2'])
  }
  releaseClick(){
    this.router.navigate(['setup/release'])
  }
  
}
