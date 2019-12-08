import { Injectable } from '@angular/core';
import { environment  as env } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient,
    private auth: AuthService) { 
  
  }

  serialize(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p) && obj[p]) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }

  getLeaves(query:any={}){
    let qstr = "?";
    if(query){
        qstr += this.serialize(query);
    }
    return this.http.get(env.apiEnd+"leaves"+qstr, this.auth.getAuthHeader());
  }

  exportLeavesExcel(query=null){
    let qstr = "?token="+this.auth.getToken()+"&";
    if(query){
        qstr += this.serialize(query);
    }
    let url = env.apiEnd + "leaves/export_excel"+qstr;
    return window.open(url, "_target");
  }

  exportLeavesPDF(query=null){
    let qstr = "?token="+this.auth.getToken()+"&";
    if(query){
        qstr += this.serialize(query);
    }
    let url = env.apiEnd + "leaves/export_pdf"+qstr;
    return window.open(url, "_target");
  }

}
