import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginData:any = {
    email : "",
    password : ""
  };
  constructor(
    private router: Router,
    private auth: AuthService
     ) { 

  }

  ngOnInit() {

  }

  onFormSubmit(e, login){
    console.log(this.loginData);
    if(!login.form.valid){
      return;
    }
    this.auth.login(this.loginData).subscribe(
    (res:any)=>{
      console.log(res);
      if(res.access_token){
        //  this.router.navigate(["/"]);
        window.location.href = "/";
      }

    },
    (err)=>{
    alert(err.error.error);
    });

  }

}
