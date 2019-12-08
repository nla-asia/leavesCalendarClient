import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './pages/calendar/calendar/calendar.component';
import { ReportsComponent } from './pages/reports/reports/reports.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SettingsComponent } from './pages/settings/settings/settings.component';
import { HolidaysComponent } from './pages/settings/holidays/holidays.component';
import { LeaveTypesComponent } from './pages/settings/leave-types/leave-types.component';
import { LeavesReportComponent } from './pages/reports/leaves-report/leaves-report.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ProfileComponent } from './pages/auth/profile/profile.component';
import { NewHolidayComponent } from './pages/settings/new-holiday/new-holiday.component';
import { NewLeaveTypeComponent } from './pages/settings/new-leave-type/new-leave-type.component';
import { NewLeaveComponent } from './pages/calendar/new-leave/new-leave.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ReportsComponent,
    HeaderComponent, 
    FooterComponent,
    SettingsComponent,
    HolidaysComponent,
    LeaveTypesComponent,
    LeavesReportComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NewHolidayComponent,
    NewLeaveTypeComponent,
    NewLeaveComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FullCalendarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewHolidayComponent, NewLeaveTypeComponent, NewLeaveComponent]
})
export class AppModule { }
