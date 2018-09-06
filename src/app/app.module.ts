
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import {MultiSelectModule} from 'primeng/multiselect';
import { WeekdaysPipe } from './pipe/weekdays.pipe';
import { YesornoPipe } from './pipe/yesorno.pipe';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'new-ticket', component: NewTicketComponent, canActivate: [AuthGuard] },
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
  { path: 'inventory', component: InventoryComponent, canActivate: [AuthGuard] },
  { path: 'setup', component: SetupComponent, canActivate: [AuthGuard] }
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

    YesornoPipe

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
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
    ToastModule,
    AutoCompleteModule,
    MultiSelectModule
  ],
  providers: [Globals, AuthGuard, Services, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }