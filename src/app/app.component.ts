import { Component} from '@angular/core';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isLoggedIn:Boolean;
  public loggedInUser:any;

  constructor(private auth: AuthService){
    this.isLoggedIn =  this.auth.isLoggedIn();
    this.loggedInUser = this.auth.getUser();
  }

  onLogout(e){
    var yes = confirm("Are you sure to delete ?");
    if(yes){
       this.auth.logout();
       window.location.reload();
    }
  }




}
