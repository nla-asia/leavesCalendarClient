import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment  as env } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http : HttpClient, 
    private auth : AuthService) { 

  }

  getHolidays(){
   return this.http.get(env.apiEnd+"holidays", this.auth.getAuthHeader());
  }

  getHoliday(holidayID){
    return this.http.get(env.apiEnd+"holidays/"+holidayID, this.auth.getAuthHeader());
   }

  addHoliday(holidayInfo){
    return this.http.post(env.apiEnd+"holidays", holidayInfo, this.auth.getAuthHeader());
  }

  updateHoliday(holidayID, holidayInfo){
    return this.http.put(env.apiEnd+"holidays/"+holidayID, holidayInfo, this.auth.getAuthHeader());
  }

  removeHoliday(holidayID){
    return this.http.delete(env.apiEnd+"holidays/"+holidayID, this.auth.getAuthHeader());
  }

  getleaveTypes(){
    return this.http.get(env.apiEnd+"leave_types", this.auth.getAuthHeader());
   }
 
   getleaveType(leaveTypeID){
     return this.http.get(env.apiEnd+"leave_types/"+leaveTypeID, this.auth.getAuthHeader());
    }
 
   addleaveType(leaveTypeInfo){
     return this.http.post(env.apiEnd+"leave_types", leaveTypeInfo, this.auth.getAuthHeader());
   }
 
   updateleaveType(leaveTypeID, leaveTypeInfo){
     return this.http.put(env.apiEnd+"leave_types/"+leaveTypeID, leaveTypeInfo, this.auth.getAuthHeader());
   }
 
   removeleaveType(leaveTypeID){
     return this.http.delete(env.apiEnd+"leave_types/"+leaveTypeID, this.auth.getAuthHeader());
   }

 


}
