
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from "@angular/router";
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AlertModule } from 'ngx-bootstrap/alert';
import { Globals } from './global/global-urls';
import { AuthGuard } from './common-session/session.check';
import { Services } from './services/common-services';
import { ManagerComponent } from './manager/manager.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NewTicketNextButtonComponent } from './new-ticket-next-button/new-ticket-next-button.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewTicketNextButtonInvoiceComponent } from './new-ticket-next-button-invoice/new-ticket-next-button-invoice.component';
import { NewTicketInvoicePaymentComponent } from './new-ticket-invoice-payment/new-ticket-invoice-payment.component';
import { MembershipComponent } from './manager-tool/membership/membership.component'; // <-- import the module
// import { ApiFrontendURLSComponent } from './api-frontend-urls/api-frontend-urls.component';
import { TableModule } from 'primeng/table';
import { HttpModule } from '@angular/http';
import { PaginatorModule } from 'primeng/paginator';
import { ScheduleComponent } from './schedule/schedule.component';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AppointmentsComponent } from './appointments/appointments.component';
import { TimeClocksComponent } from './time-clocks/time-clocks.component';
import { ReportsComponent } from './reports/reports.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SetupComponent } from './setup/setup.component';
import { InactiveMembershipComponent } from './manager-tool/inactive-membership/inactive-membership.component';
import { CalendarModule } from 'primeng/calendar';
import * as moment from 'moment';
import { StaffClockInOutComponent } from './manager-tool/staff-clock-in-out/staff-clock-in-out.component';
import { StaffVieworeditTimeclockComponent } from './manager-tool/staff-vieworedit-timeclock/staff-vieworedit-timeclock.component';
import { StaffPermissionsComponent } from './manager-tool/staff-permissions/staff-permissions.component';
import { StaffScheduleViewComponent } from './manager-tool/staff-schedule-view/staff-schedule-view.component';
import { StaffMembersComponent } from './manager-tool/staff-members/staff-members.component';
import { StaffScheduleAddComponent } from './manager-tool/staff-schedule-add/staff-schedule-add.component';
import { AddPackagesComponent } from './manager-tool/add-packages/add-packages.component';
import { EditPackagesComponent } from './manager-tool/edit-packages/edit-packages.component';
import { AddPromotionsComponent } from './manager-tool/add-promotions/add-promotions.component';
import { EditPromotionsComponent } from './manager-tool/edit-promotions/edit-promotions.component';
import { NewsEventsComponent } from './manager-tool/news-events/news-events.component';
import { AutoEmailsComponent } from './manager-tool/auto-emails/auto-emails.component';
import { MembershipSetupComponent } from './manager-tool/membership-setup/membership-setup.component';
import { CancelGroupLessonComponent } from './manager-tool/cancel-group-lesson/cancel-group-lesson.component';
import { AddGiftCardComponent } from './manager-tool/add-gift-card/add-gift-card.component';
import { EditGiftCardComponent } from './manager-tool/edit-gift-card/edit-gift-card.component';
import { ViewActiveGiftCardComponent } from './manager-tool/view-active-gift-card/view-active-gift-card.component';
import { OnlineGiftCardsComponent } from './manager-tool/online-gift-cards/online-gift-cards.component';
import { AutoCompleteModule } from 'primeng/autocomplete'
import {GrowlModule} from 'primeng/growl';
import {MultiSelectModule} from 'primeng/multiselect';
import { WeekdaysPipe } from './pipe/weekdays.pipe';
import { YesornoPipe } from './pipe/yesorno.pipe';
import { PurchaseOrderComponent } from './inventory/purchase-order/purchase-order.component';
import { SuppliersComponent } from './inventory/suppliers/suppliers.component';
import { InventoryTicketsComponent } from './inventory/inventory-tickets/inventory-tickets.component';
import { UpdatePhysicalInventoryComponent } from './inventory/update-physical-inventory/update-physical-inventory.component';
import { InventoryReportsComponent } from './inventory/inventory-reports/inventory-reports.component';
import { BusinessSettingsComponent } from './setup/business-settings/business-settings.component';
import { AppointmentOptionsComponent } from './setup/appointment-options/appointment-options.component';
import { GroupSettingsOptionsComponent } from './setup/group-settings-options/group-settings-options.component';
import { SetupMembershipComponent } from './setup/setup-membership/setup-membership.component';
import { PaymentTermsComponent } from './setup/payment-terms/payment-terms.component';
import { ProductColorsComponent } from './setup/product-colors/product-colors.component';
import { ProductSizesComponent } from './setup/product-sizes/product-sizes.component';
import { SuppliersSetupComponent } from './setup/suppliers-setup/suppliers-setup.component';
import { ClientAlertsComponent } from './setup/client-alerts/client-alerts.component';
import { AddNewRelationshipComponent } from './setup/add-new-relationship/add-new-relationship.component';
import { ClientIndexValueComponent } from './setup/client-index-value/client-index-value.component';
import { ClientTypesComponent } from './setup/client-types/client-types.component';
import { ClientProfileFieldsComponent } from './setup/client-profile-fields/client-profile-fields.component';
import { ClientStatusComponent } from './setup/client-status/client-status.component';
import { ContactLogTypesComponent } from './setup/contact-log-types/contact-log-types.component';
import { ProspectStagesComponent } from './setup/prospect-stages/prospect-stages.component';
import { ReferalTypesComponent } from './setup/referal-types/referal-types.component';
import { RequiredFieldComponent } from './setup/required-field/required-field.component';
import { CloseOutDataComponent } from './setup/close-out-data/close-out-data.component';
import { PaymentMethodsComponent } from './setup/payment-methods/payment-methods.component';
import { RevenueCategoriesComponent } from './setup/revenue-categories/revenue-categories.component';
import { ProductRevenueCategoriesComponent } from './setup/product-revenue-categories/product-revenue-categories.component';
import { RevenueSubCategoriesComponent } from './setup/revenue-sub-categories/revenue-sub-categories.component';
import { CardSwipeDeviceComponent } from './setup/card-swipe-device/card-swipe-device.component';
import { CardSwipeSettingsComponent } from './setup/card-swipe-settings/card-swipe-settings.component';
import { ComPortComponent } from './setup/com-port/com-port.component';
import { TestCommunicationsComponent } from './setup/test-communications/test-communications.component';
import { GeneralPaymentComponent } from './setup/general-payment/general-payment.component';
import { IpChargeComponent } from './setup/ip-charge/ip-charge.component';
import { MonetraComponent } from './setup/monetra/monetra.component';
import { PaidIoAccessComponent } from './setup/paid-io-access/paid-io-access.component';
import { PcChargeComponent } from './setup/pc-charge/pc-charge.component';
import { PositionsComponent } from './setup/positions/positions.component';
import { SvsComponent } from './setup/svs/svs.component';
import { CashDrawerSetupComponent } from './setup/cash-drawer-setup/cash-drawer-setup.component';
import { AdditionalFooterComponent } from './setup/additional-footer/additional-footer.component';
import { MembershipRecieptComponent } from './setup/membership-reciept/membership-reciept.component';
import { CustomHeaderComponent } from './setup/custom-header/custom-header.component';
import { NewCustomFooterComponent } from './setup/new-custom-footer/new-custom-footer.component';
import { DefaultFooterComponent } from './setup/default-footer/default-footer.component';
import { Options1Component } from './setup/options1/options1.component';
import { HardwareComponent } from './setup/hardware/hardware.component';
import { Options2Component } from './setup/options2/options2.component';
import { ReleaseComponent } from './setup/release/release.component';
import { AddNewProductComponent } from './manager-tool/add-new-product/add-new-product.component';
import { EditProductComponent } from './manager-tool/edit-product/edit-product.component';
import { ShowActiveProductComponent } from './manager-tool/show-active-product/show-active-product.component';
import { ShowInactiveProductComponent } from './manager-tool/show-inactive-product/show-inactive-product.component';
import { ManageProductsComponent } from './manager-tool/manage-products/manage-products.component';
import { AddNewSuppliersComponent } from './inventory/suppliers/add-new-suppliers/add-new-suppliers.component';
import { NewInventoryTicketComponent } from './inventory/inventory-tickets/new-inventory-ticket/new-inventory-ticket.component';
import { NewPurchaseOrderComponent } from './inventory/purchase-order/new-purchase-order/new-purchase-order.component';
import { PurchaseOrderSupplierComponent } from './inventory/purchase-order/purchase-order-supplier/purchase-order-supplier.component';
import { CommissionComponent } from './reports/Staff/commission/commission.component';
import { PayRollComponent } from './reports/Staff/pay-roll/pay-roll.component';
import { ScheduleAtGlanceComponent } from './reports/Staff/schedule-at-glance/schedule-at-glance.component';
import { ReportTimeClockComponent } from './reports/Staff/report-time-clock/report-time-clock.component';
import { RatingsAndReviewsComponent } from './reports/Staff/ratings-and-reviews/ratings-and-reviews.component';
import { TipsComponent } from './reports/Staff/tips/tips.component';
import { CancellationsComponent } from './reports/Staff/cancellations/cancellations.component';
import { StaffScheduleComponent } from './reports/Staff/staff-schedule/staff-schedule.component';
import { PhoneBookComponent } from './reports/Staff/phone-book/phone-book.component';
import { StaffPerformanceComponent } from './reports/Staff/staff-performance/staff-performance.component';
import { ClientPerStylistComponent } from './reports/Staff/client-per-stylist/client-per-stylist.component';
import { AppointmentMetricsComponent } from './reports/Staff/appointment-metrics/appointment-metrics.component';
import { PayRatesComponent } from './reports/Staff/pay-rates/pay-rates.component';
import { ApprovedTransacationsComponent } from './reports/Payment-Processing/approved-transacations/approved-transacations.component';
import { AutopayDetailsComponent } from './reports/Payment-Processing/autopay-details/autopay-details.component';
import { SettledTransactionComponent } from './reports/Payment-Processing/settled-transaction/settled-transaction.component';
import { AutopaySummaryComponent } from './reports/Payment-Processing/autopay-summary/autopay-summary.component';
import { PendingTransactionComponent } from './reports/Payment-Processing/pending-transaction/pending-transaction.component';
import { VoidedorrejectedComponent } from './reports/Payment-Processing/voidedorrejected/voidedorrejected.component';
import { AutopayExpirationsComponent } from './reports/Payment-Processing/autopay-expirations/autopay-expirations.component';
import { AutopayCcExpirationsComponent } from './reports/Payment-Processing/autopay-cc-expirations/autopay-cc-expirations.component';
import { SalesComponent } from './reports/Sales/sales/sales.component';
import { DailyDiscountsComponent } from './reports/Sales/daily-discounts/daily-discounts.component';
import { CashDrawerComponent } from './reports/Sales/cash-drawer/cash-drawer.component';
import { SalesByServiceComponent } from './reports/Sales/sales-by-service/sales-by-service.component';
import { SalesByCatagoryComponent } from './reports/Sales/sales-by-catagory/sales-by-catagory.component';
import { SalesByProductComponent } from './reports/Sales/sales-by-product/sales-by-product.component';
import { SalesByRepComponent } from './reports/Sales/sales-by-rep/sales-by-rep.component';
import { SalesGiftCardsComponent } from './reports/Sales/sales-gift-cards/sales-gift-cards.component';
import { AttendenceWithRevenueComponent } from './reports/Sales/attendence-with-revenue/attendence-with-revenue.component';
import { SalesBySupliersComponent } from './reports/Sales/sales-by-supliers/sales-by-supliers.component';
import { ManageOnlineOrdersComponent } from './reports/Sales/manage-online-orders/manage-online-orders.component';
import { InvoiceComponent } from './reports/Sales/invoice/invoice.component';
import { EarnedRevenueComponent } from './reports/Sales/earned-revenue/earned-revenue.component';
import { TodaysSaleComponent } from './todays-sale/todays-sale.component';
import { InventoryOnHandComponent } from './reports/clients/inventory-on-hand/inventory-on-hand.component';
import { CostOfGoodsComponent } from './reports/clients/cost-of-goods/cost-of-goods.component';
import { SalesBySupplierReportsComponent } from './reports/clients/sales-by-supplier-reports/sales-by-supplier-reports.component';
import { ManageComponent } from './reports/clients/manage/manage.component';
import { RetailsSalesPerformanceComponent } from './reports/clients/retails-sales-performance/retails-sales-performance.component';
import { InventoryAgeComponent } from './reports/clients/inventory-age/inventory-age.component';
import { InventoryReportsSalesComponent } from './reports/clients/inventory-reports-sales/inventory-reports-sales.component';
import { ClientReportsMembershipsComponent } from './reports/clients-reports/client-reports-memberships/client-reports-memberships.component';
import { ClientReportsMailingListsComponent } from './reports/clients-reports/client-reports-mailing-lists/client-reports-mailing-lists.component';
import { ClientReportsRatingsReviewsComponent } from './reports/clients-reports/client-reports-ratings-reviews/client-reports-ratings-reviews.component';
import { ClientReportsAccountBalanceComponent } from './reports/clients-reports/client-reports-account-balance/client-reports-account-balance.component';
import { ClientReportsContactLogsComponent } from './reports/clients-reports/client-reports-contact-logs/client-reports-contact-logs.component';
import { ClientReportsEntryLogsComponent } from './reports/clients-reports/client-reports-entry-logs/client-reports-entry-logs.component';
import { ClientReportsCancellationsComponent } from './reports/clients-reports/client-reports-cancellations/client-reports-cancellations.component';
import { ClientReportsFirstVisitComponent } from './reports/clients-reports/client-reports-first-visit/client-reports-first-visit.component';
import { ClientReportsUnpaidVisitsComponent } from './reports/clients-reports/client-reports-unpaid-visits/client-reports-unpaid-visits.component';
import { ClientReportsLastVisitComponent } from './reports/clients-reports/client-reports-last-visit/client-reports-last-visit.component';
import { ClientReportsAttendenceAnalysisComponent } from './reports/clients-reports/client-reports-attendence-analysis/client-reports-attendence-analysis.component';
import { ClientReportsPricingOptionsComponent } from './reports/clients-reports/client-reports-pricing-options/client-reports-pricing-options.component';
import { ClientReportsNewMembersComponent } from './reports/clients-reports/client-reports-new-members/client-reports-new-members.component';
import { InventoryChangeLogComponent } from './reports/clients/inventory-change-log/inventory-change-log.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'new-ticket', component: NewTicketComponent, canActivate: [AuthGuard] },
  { path: 'todays-sale', component: TodaysSaleComponent, canActivate: [AuthGuard] },
  { path: 'new-ticket-next-button', component: NewTicketNextButtonComponent, canActivate: [AuthGuard] },
  { path: 'new-ticket-next-button-invoice', component: NewTicketNextButtonInvoiceComponent, canActivate: [AuthGuard] },
  { path: 'new-ticket-next-button-invoice-payment', component: NewTicketInvoicePaymentComponent, canActivate: [AuthGuard] },
  { path: 'management', component: ManagerComponent, canActivate: [AuthGuard] },
  { path: 'inactive-membership', component: InactiveMembershipComponent, canActivate: [AuthGuard] },
  { path: 'management-membership', component: MembershipComponent, canActivate: [AuthGuard] },
  { path: 'staff-clock-in/out', component: StaffClockInOutComponent, canActivate: [AuthGuard] },
  { path: 'staff-view/edit-timeclock', component: StaffVieworeditTimeclockComponent, canActivate: [AuthGuard] },
  { path: 'staff-permissions', component: StaffPermissionsComponent, canActivate: [AuthGuard] },
  { path: 'staff-schedule-view', component: StaffScheduleViewComponent, canActivate: [AuthGuard] },
  { path: 'staff-members', component: StaffMembersComponent, canActivate: [AuthGuard] },
  { path: 'staff-schedule-add/edit', component: StaffScheduleAddComponent, canActivate: [AuthGuard] },
  { path: 'add-packages', component: AddPackagesComponent, canActivate: [AuthGuard] },
  { path: 'edit-packages', component: EditPackagesComponent, canActivate: [AuthGuard] },
  { path: 'add-promotions', component: AddPromotionsComponent, canActivate: [AuthGuard] },
  { path: 'edit-promotions', component: EditPromotionsComponent, canActivate: [AuthGuard] },
  { path: 'news-and-events', component: NewsEventsComponent, canActivate: [AuthGuard] },
  { path: 'auto-emails', component: AutoEmailsComponent, canActivate: [AuthGuard] },
  { path: 'membership-setup', component: MembershipSetupComponent, canActivate: [AuthGuard] },
  { path: 'cancel-group-lesson', component: CancelGroupLessonComponent, canActivate: [AuthGuard] },
  { path: 'add-new-gift-card', component: AddGiftCardComponent, canActivate: [AuthGuard] },
  { path: 'edit-gift-card', component: EditGiftCardComponent, canActivate: [AuthGuard] },
  { path: 'view-active-gift-card', component: ViewActiveGiftCardComponent, canActivate: [AuthGuard] },
  { path: 'online-gift-card', component: OnlineGiftCardsComponent, canActivate: [AuthGuard] },
  { path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuard] },
  { path: 'appointments', component: AppointmentsComponent, canActivate: [AuthGuard] },
  { path: 'time-clocks', component: TimeClocksComponent, canActivate: [AuthGuard] },
  
  { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard] },
  { path: 'staff/commission', component: CommissionComponent, canActivate: [AuthGuard] },
  { path: 'staff/pay-roll', component: PayRollComponent, canActivate: [AuthGuard] },
  { path: 'staff/schedule-at-glance', component: ScheduleAtGlanceComponent, canActivate: [AuthGuard] },
  { path: 'staff/time-clock', component: ReportTimeClockComponent, canActivate: [AuthGuard] },
  { path: 'staff/ratings-and-reviews', component: RatingsAndReviewsComponent, canActivate: [AuthGuard] },
  { path: 'staff/tips', component: TipsComponent, canActivate: [AuthGuard] },
  { path: 'staff/cancellations', component: CancellationsComponent, canActivate: [AuthGuard] },
  { path: 'staff/schedule', component: StaffScheduleComponent, canActivate: [AuthGuard] },
  { path: 'staff/phone-book', component: PhoneBookComponent, canActivate: [AuthGuard] },
  { path: 'staff/performance', component: StaffPerformanceComponent, canActivate: [AuthGuard] },
  { path: 'staff/client-per-stylist', component: ClientPerStylistComponent, canActivate: [AuthGuard] },
  { path: 'staff/appointment-metrics', component: AppointmentMetricsComponent, canActivate: [AuthGuard] },
  { path: 'staff/pay-rates', component: PayRatesComponent, canActivate: [AuthGuard] },

  { path: 'sales/attence-with-revenue', component: AttendenceWithRevenueComponent, canActivate: [AuthGuard] },
  { path: 'sales/cash-drawer', component: CashDrawerComponent, canActivate: [AuthGuard] },
  { path: 'sales/daily-discounts', component: DailyDiscountsComponent, canActivate: [AuthGuard] },
  { path: 'sales/earned-revenue', component: EarnedRevenueComponent, canActivate: [AuthGuard] },
  { path: 'sales/invoice-sales', component: InvoiceComponent, canActivate: [AuthGuard] },
  { path: 'sales/manage-online-orders', component: ManageOnlineOrdersComponent, canActivate: [AuthGuard] },
  { path: 'sales/sales-sales', component: SalesComponent, canActivate: [AuthGuard] },
  { path: 'sales/sales-by-catagory', component: SalesByCatagoryComponent, canActivate: [AuthGuard] },
  { path: 'sales/sales-by-product', component: SalesByProductComponent, canActivate: [AuthGuard] },
  { path: 'sales/sales-by-rep', component: SalesByRepComponent, canActivate: [AuthGuard] },
  { path: 'sales/sales-by-service', component: SalesByServiceComponent, canActivate: [AuthGuard] },
  { path: 'sales/sales-by-supliers', component: SalesBySupliersComponent, canActivate: [AuthGuard] },
  { path: 'sales/sales-giftcards', component: SalesGiftCardsComponent, canActivate: [AuthGuard] },
  { path: 'payment/approved-transactions', component: ApprovedTransacationsComponent, canActivate: [AuthGuard] },
  { path: 'payment/autopay-detail', component: AutopayDetailsComponent, canActivate: [AuthGuard] },
  { path: 'payment/settled-transaction', component: SettledTransactionComponent, canActivate: [AuthGuard] },
  { path: 'payment/autopay-summary', component: AutopaySummaryComponent, canActivate: [AuthGuard] },
  { path: 'payment/pending-transaction', component: PendingTransactionComponent, canActivate: [AuthGuard] },
  { path: 'payment/rejected-transaction', component: VoidedorrejectedComponent, canActivate: [AuthGuard] },
  { path: 'payment/autopay-expirations', component: AutopayExpirationsComponent, canActivate: [AuthGuard] },
  { path: 'payment/autopay-cc-expirations', component: AutopayCcExpirationsComponent, canActivate: [AuthGuard] },

  { path: 'clients/cost-of-goods', component: CostOfGoodsComponent, canActivate: [AuthGuard] },
  { path: 'clients/inventory-reports-sales', component: InventoryReportsSalesComponent, canActivate: [AuthGuard] },
  { path: 'clients/inventory-age', component: InventoryAgeComponent, canActivate: [AuthGuard] },
  { path: 'clients/inventoty-on-hand', component: InventoryOnHandComponent, canActivate: [AuthGuard] },
  { path: 'clients/manage', component: ManageComponent, canActivate: [AuthGuard] },
  { path: 'clients/retails-sales-performance', component: RetailsSalesPerformanceComponent, canActivate: [AuthGuard] },
  { path: 'clients/sales-by-product', component: SalesByProductComponent, canActivate: [AuthGuard] },
  { path: 'clients/sales-by-supliers', component: SalesBySupplierReportsComponent, canActivate: [AuthGuard] },
  { path: 'clients/inventory-change-log', component: InventoryChangeLogComponent, canActivate: [AuthGuard] },

  { path: 'client-reports/client-reports-account-balance', component: ClientReportsAccountBalanceComponent, canActivate: [AuthGuard] },
  { path: 'client-reports/client-reports-attendence-analysis', component: ClientReportsAttendenceAnalysisComponent, canActivate: [AuthGuard] },
  { path: 'client-reports/client-reports-cancellations', component: ClientReportsCancellationsComponent, canActivate: [AuthGuard] },
  { path: 'client-reports/client-reports-contact-logs', component: ClientReportsContactLogsComponent, canActivate: [AuthGuard] },
  { path: 'client-reports/client-reports-entry-logs', component: ClientReportsEntryLogsComponent, canActivate: [AuthGuard] },
  { path: 'client-reports/client-reports-first-visit', component: ClientReportsFirstVisitComponent, canActivate: [AuthGuard] },
  { path: 'client-reports/client-reports-last-visit', component: ClientReportsLastVisitComponent, canActivate: [AuthGuard] },
  { path: 'client-reports/client-reports-mailing-lists', component: ClientReportsMailingListsComponent, canActivate: [AuthGuard] },
  { path: 'client-reports/client-reports-memberships', component: ClientReportsMembershipsComponent, canActivate: [AuthGuard] },
  { path: 'client-reports/client-reports-new-members', component: ClientReportsNewMembersComponent, canActivate: [AuthGuard] },
  { path: 'client-reports/client-reports-pricing-options', component: ClientReportsPricingOptionsComponent, canActivate: [AuthGuard] },
  { path: 'client-reports/client-reports-ratings-reviews', component: ClientReportsRatingsReviewsComponent, canActivate: [AuthGuard] },
  { path: 'client-reports/client-reports-unpaid-visits', component: ClientReportsUnpaidVisitsComponent, canActivate: [AuthGuard] },

  { path: 'inventory', component: InventoryComponent, canActivate: [AuthGuard] },
  { path: 'inventory/purchase-order', component: PurchaseOrderComponent, canActivate: [AuthGuard] },
  { path: 'inventory/suppliers', component: SuppliersComponent, canActivate: [AuthGuard] },
  { path: 'inventory/inventory-tickets', component: InventoryTicketsComponent, canActivate: [AuthGuard] },
  { path: 'inventory/physical-inventory', component: UpdatePhysicalInventoryComponent, canActivate: [AuthGuard] },
  { path: 'inventory/reports', component: InventoryReportsComponent, canActivate: [AuthGuard] },
  { path: 'inventory/suppliers/new-suppliers', component: AddNewSuppliersComponent, canActivate: [AuthGuard] },
  { path: 'inventory/new-inventory-ticket', component: NewInventoryTicketComponent, canActivate: [AuthGuard] },
  { path: 'inventory/new-purchase-order', component: NewPurchaseOrderComponent, canActivate: [AuthGuard] },
  { path: 'inventory/purchase-order-supplier', component: PurchaseOrderSupplierComponent, canActivate: [AuthGuard] },
  

  { path: 'setup', component: SetupComponent, canActivate: [AuthGuard] },
  { path: 'setup/business-settings', component: BusinessSettingsComponent, canActivate: [AuthGuard] },
  { path: 'setup/appointment-options', component: AppointmentOptionsComponent, canActivate: [AuthGuard] },
  { path: 'setup/group-setting-options', component: GroupSettingsOptionsComponent, canActivate: [AuthGuard] },
  { path: 'setup/membership-setup', component: SetupMembershipComponent, canActivate: [AuthGuard] },
  { path: 'setup/close-out-data', component: CloseOutDataComponent, canActivate: [AuthGuard] },
  { path: 'setup/payment-methods ', component: PaymentMethodsComponent, canActivate: [AuthGuard] },
  { path: 'setup/product-revenue-categories', component: ProductRevenueCategoriesComponent, canActivate: [AuthGuard] },
  { path: 'setup/revenue-categories', component: RevenueCategoriesComponent, canActivate: [AuthGuard] },
  { path: 'setup/revenue-sub-categories', component: RevenueSubCategoriesComponent, canActivate: [AuthGuard] }, 
  { path: 'setup/payment-terms', component: PaymentTermsComponent, canActivate: [AuthGuard] },
  { path: 'setup/product-colors', component: ProductColorsComponent, canActivate: [AuthGuard] },
  { path: 'setup/product-sizes', component: ProductSizesComponent, canActivate: [AuthGuard] },
  { path: 'setup/suppliers', component: SuppliersSetupComponent, canActivate: [AuthGuard] },
  { path: 'setup/client-alerts', component: ClientAlertsComponent, canActivate: [AuthGuard] },
  { path: 'setup/add-new-relationship', component: AddNewRelationshipComponent, canActivate: [AuthGuard] },
  { path: 'setup/client-index-value', component: ClientIndexValueComponent, canActivate: [AuthGuard] },
  { path: 'setup/client-types', component: ClientTypesComponent, canActivate: [AuthGuard] },
  { path: 'setup/client-profile-custom-fields', component: ClientProfileFieldsComponent, canActivate: [AuthGuard] },
  { path: 'setup/client-status', component: ClientStatusComponent, canActivate: [AuthGuard] },
  { path: 'setup/contact-log-types', component: ContactLogTypesComponent, canActivate: [AuthGuard] },
  { path: 'setup/prospect-stages', component: ProspectStagesComponent, canActivate: [AuthGuard] },
  { path: 'setup/referal-types', component: ReferalTypesComponent, canActivate: [AuthGuard] },
  { path: 'setup/required-field', component: RequiredFieldComponent, canActivate: [AuthGuard] },
  { path: 'setup/card-swipe-device', component: CardSwipeDeviceComponent, canActivate: [AuthGuard] },
  { path: 'setup/card-swipe-settings', component: CardSwipeSettingsComponent, canActivate: [AuthGuard] },
  { path: 'setup/com-port', component: ComPortComponent, canActivate: [AuthGuard] },
  { path: 'setup/test-communications', component: TestCommunicationsComponent, canActivate: [AuthGuard] },  
  { path: 'setup/general', component: GeneralPaymentComponent, canActivate: [AuthGuard] },
  { path: 'setup/ip-charge', component: IpChargeComponent, canActivate: [AuthGuard] },
  { path: 'setup/monetra', component: MonetraComponent, canActivate: [AuthGuard] },
  { path: 'setup/paid-io-access', component: PaidIoAccessComponent, canActivate: [AuthGuard] },
  { path: 'setup/pc-charge', component: PcChargeComponent, canActivate: [AuthGuard] },
  { path: 'setup/positions', component: PositionsComponent, canActivate: [AuthGuard] },
  { path: 'setup/svs', component: SvsComponent, canActivate: [AuthGuard] },
  { path: 'setup/cash-drawer-setup', component: CashDrawerSetupComponent, canActivate: [AuthGuard] },
  { path: 'setup/additional-footer', component: AdditionalFooterComponent, canActivate: [AuthGuard] },
  { path: 'setup/membership', component: MembershipRecieptComponent, canActivate: [AuthGuard] },
  { path: 'setup/custom-header', component: CustomHeaderComponent, canActivate: [AuthGuard] },
  { path: 'setup/new-custom-footer', component: NewCustomFooterComponent, canActivate: [AuthGuard] },
  { path: 'setup/default-footer', component: DefaultFooterComponent, canActivate: [AuthGuard] },
  { path: 'setup/option1', component: Options1Component, canActivate: [AuthGuard] },
  { path: 'setup/hardware', component: HardwareComponent, canActivate: [AuthGuard] },
  { path: 'setup/option2', component: Options2Component, canActivate: [AuthGuard] },
  { path: 'setup/release', component: ReleaseComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NewTicketComponent,
    ManagerComponent,
    NewTicketNextButtonComponent,
    HeaderComponent,
    FooterComponent,
    NewTicketNextButtonInvoiceComponent,
    NewTicketInvoicePaymentComponent,
    MembershipComponent,
    ScheduleComponent,
    AppointmentsComponent,
    TimeClocksComponent,
    ReportsComponent,
    InventoryComponent,
    SetupComponent,
    InactiveMembershipComponent,
    StaffClockInOutComponent,
    StaffVieworeditTimeclockComponent,
    StaffPermissionsComponent,
    StaffScheduleViewComponent,
    StaffMembersComponent,
    StaffScheduleAddComponent,
    AddPackagesComponent,
    EditPackagesComponent,
    AddPromotionsComponent,
    EditPromotionsComponent,
    NewsEventsComponent,
    AutoEmailsComponent,
    MembershipSetupComponent,
    CancelGroupLessonComponent,
    AddGiftCardComponent,
    EditGiftCardComponent,
    ViewActiveGiftCardComponent,
    OnlineGiftCardsComponent,
    WeekdaysPipe,
    YesornoPipe,
    PurchaseOrderComponent,
    SuppliersComponent,
    InventoryTicketsComponent,
    UpdatePhysicalInventoryComponent,
    InventoryReportsComponent,
    BusinessSettingsComponent,
    AppointmentOptionsComponent,
    GroupSettingsOptionsComponent,
    SetupMembershipComponent,
    PaymentTermsComponent,
    ProductColorsComponent,
    ProductSizesComponent,
    SuppliersSetupComponent,
    ClientAlertsComponent,
    AddNewRelationshipComponent,
    ClientIndexValueComponent,
    ClientTypesComponent,
    ClientProfileFieldsComponent,
    ClientStatusComponent,
    ContactLogTypesComponent,
    ProspectStagesComponent,
    ReferalTypesComponent,
    RequiredFieldComponent,
    CloseOutDataComponent,
    PaymentMethodsComponent,
    RevenueCategoriesComponent,
    ProductRevenueCategoriesComponent,
    RevenueSubCategoriesComponent,
    CardSwipeDeviceComponent,
    CardSwipeSettingsComponent,
    ComPortComponent,
    TestCommunicationsComponent,
    GeneralPaymentComponent,
    IpChargeComponent,
    MonetraComponent,
    PaidIoAccessComponent,
    PcChargeComponent,
    PositionsComponent,
    SvsComponent,
    CashDrawerSetupComponent,
    AdditionalFooterComponent,
    MembershipRecieptComponent,
    CustomHeaderComponent,
    NewCustomFooterComponent,
    DefaultFooterComponent,
    Options1Component,
    HardwareComponent,
    Options2Component,
    ReleaseComponent,
    AddNewProductComponent,
    EditProductComponent,
    ShowActiveProductComponent,
    ShowInactiveProductComponent,
    ManageProductsComponent,
    AddNewSuppliersComponent,
    NewInventoryTicketComponent,
    NewPurchaseOrderComponent,
    PurchaseOrderSupplierComponent,
    CommissionComponent,
    PayRollComponent,
    ScheduleAtGlanceComponent,
    ReportTimeClockComponent,
    RatingsAndReviewsComponent,
    TipsComponent,
    CancellationsComponent,
    StaffScheduleComponent,
    PhoneBookComponent,
    StaffPerformanceComponent,
    ClientPerStylistComponent,
    AppointmentMetricsComponent,
    PayRatesComponent,
    ApprovedTransacationsComponent,
    AutopayDetailsComponent,
    SettledTransactionComponent,
    AutopaySummaryComponent,
    PendingTransactionComponent,
    VoidedorrejectedComponent,
    AutopayExpirationsComponent,
    AutopayCcExpirationsComponent,
    SalesComponent,
    DailyDiscountsComponent,
    CashDrawerComponent,
    SalesByServiceComponent,
    SalesByCatagoryComponent,
    SalesByProductComponent,
    SalesByRepComponent,
    SalesGiftCardsComponent,
    AttendenceWithRevenueComponent,
    SalesBySupliersComponent,
    ManageOnlineOrdersComponent,
    InvoiceComponent,
    EarnedRevenueComponent,
    TodaysSaleComponent,
    InventoryOnHandComponent,
    CostOfGoodsComponent,
    SalesBySupplierReportsComponent,
    ManageComponent,
    RetailsSalesPerformanceComponent,
    InventoryAgeComponent,
    InventoryReportsSalesComponent,
    ClientReportsMembershipsComponent,
    ClientReportsMailingListsComponent,
    ClientReportsRatingsReviewsComponent,
    ClientReportsAccountBalanceComponent,
    ClientReportsContactLogsComponent,
    ClientReportsEntryLogsComponent,
    ClientReportsCancellationsComponent,
    ClientReportsFirstVisitComponent,
    ClientReportsUnpaidVisitsComponent,
    ClientReportsLastVisitComponent,
    ClientReportsAttendenceAnalysisComponent,
    ClientReportsPricingOptionsComponent,
    ClientReportsNewMembersComponent,
    InventoryChangeLogComponent,

  
    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
    TypeaheadModule.forRoot(),
    AlertModule.forRoot(),
    Ng2SearchPipeModule, //including into imports
    Ng2OrderModule, // importing the sorting package here
    NgxPaginationModule,
    TableModule,
    HttpModule,
    PaginatorModule,
    CalendarModule,
    DialogModule,
    NgxSpinnerModule,
    ToastModule,
    AutoCompleteModule,
    MultiSelectModule,
    GrowlModule
  ],
  providers: [Globals, AuthGuard, Services, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }