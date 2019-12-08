import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


import { CalendarComponent } from './pages/calendar/calendar/calendar.component';
import { ReportsComponent } from './pages/reports/reports/reports.component';
import { SettingsComponent } from './pages/settings/settings/settings.component';
import { LeaveTypesComponent } from './pages/settings/leave-types/leave-types.component';
import { HolidaysComponent } from './pages/settings/holidays/holidays.component';
import { LeavesReportComponent } from './pages/reports/leaves-report/leaves-report.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';


const routes: Routes = [
  
  { path : "", canActivate: [AuthGuard], component : CalendarComponent },
  { path : "login", component : LoginComponent},
  { path : "register", component : RegisterComponent},
  {
   path : "reports", 
   canActivate: [AuthGuard],
   component : ReportsComponent,
   children: [
     { path: "leaves", component: LeavesReportComponent }
   ]
  },
  {
    path : "settings", 
    canActivate: [AuthGuard],
    component : SettingsComponent,
    children: [
      { path: "holidays", component: HolidaysComponent },
      { path: "leaveTypes", component: LeaveTypesComponent }
    ]
  },
  {
    path : "**",
    component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
