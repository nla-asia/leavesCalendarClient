import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isLoggedIn:Boolean;
  @Input() loggedInUser:any;
  @Output() onLogout = new EventEmitter();
  constructor() { 

  }

  ngOnInit() {

  }

  onLogoutClick(e){
    console.log("logout");
    this.onLogout.emit();
  }

}
