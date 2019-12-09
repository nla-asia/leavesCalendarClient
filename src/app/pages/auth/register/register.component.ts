import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public employeeInfo:any = {
   name : "",
   designation : "",
   email : "",
   phone : "",
   password : ""
  };

  constructor(private auth : AuthService,
    private router : Router) { 

  }

  ngOnInit() {

  }

  onFormSubmit(e, register){
    console.log(this.employeeInfo);
    if(!register.form.valid){
      return;
    }
    this.auth.register(this.employeeInfo).subscribe(
    (res)=>{
      console.log(res);
      this.router.navigate(["/login"]);
    },
    (err)=>{
      console.log(err);
    if(err.error.error){
      alert(err.error.error);
    }
    if(err.error.errors.email){
      alert(err.error.errors.email[0]);
    }
   
    });

  }

}
