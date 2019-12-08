import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { environment  as env } from "../../environments/environment";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private auth : AuthService,
    private http : HttpClient) { 

  }

  getMyLeaves(start:any, end:any){
    return this.http.get(env.apiEnd+"leaves/mine", this.auth.getAuthHeader());
  }

  submitNewLeave(leaveInfo){
    return this.http.post(env.apiEnd+"leaves", leaveInfo, this.auth.getAuthHeader());
  }
 


}
