import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment  as env } from "../../environments/environment";
import { JwtHelperService } from "@auth0/angular-jwt";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token:any = localStorage.getItem(env.storagePrefix+"_access_token") || null;
  private user:any;
  constructor(private http: HttpClient) { 
    this.token =  localStorage.getItem(env.storagePrefix+"_access_token") || null;
    this.user   =  localStorage.getItem(env.storagePrefix+"_user") ? JSON.parse(localStorage.getItem(env.storagePrefix+"_user")) : {};
  }


  setToken(token){
    this.token = token;
    localStorage.setItem(env.storagePrefix+"_access_token", token);
  }

  getToken(){
    return this.token;
  }

  setUser(user){
    this.user = user;
    localStorage.setItem(env.storagePrefix+"_user", JSON.stringify(user));
  }

  getUser(){
    return this.user;
  }

  isLoggedIn(){
    if(!this.token){
      return false;
    }
    const helper = new JwtHelperService();
    if(!helper.isTokenExpired(this.token)){
      return true;
    }
    return false;
  }

  getAuthHeader(){
    return {
                  headers: new HttpHeaders({ 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+this.token
                })
            };
  }


  register(employeeInfo){
    return this.http.post(env.apiEnd+"employees/register",employeeInfo);
  }

  login(credentials){
    return this.http.post(env.apiEnd+"employees/login",credentials).pipe(map( (res:any) => {
      if(res.access_token){
        this.setToken(res.access_token);
        this.setUser(res.user);
      }
      return res;
  }));
  }

  logout(){
    this.token = null;
    this.user = null;
    localStorage.removeItem(env.storagePrefix+"_user");
    localStorage.removeItem(env.storagePrefix+"_access_token");
    return this.http.post(env.apiEnd+"employees/logout",{}, this.getAuthHeader());
  }

  getEmployee(){
    return this.http.get(env.apiEnd+"employees/me", this.getAuthHeader());
  }


}
