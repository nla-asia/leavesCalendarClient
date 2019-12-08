import { Component, Input, OnInit } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewHolidayComponent } from '../new-holiday/new-holiday.component';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent implements OnInit {
  public holidays:any = [];
  public hasHolidays:Boolean = true;
  constructor(private modalService: NgbModal,
    private settingsService : SettingsService) { 

  }

  ngOnInit() {
    this.settingsService.getHolidays().subscribe(
      (res:any)=>{
        if(res.data){
          this.holidays = res.data;
        }
      },
      (err:any)=>{
        console.log(err);
      }
    );
  }

  openNewHoliday(e){

    const modalRef = this.modalService.open(NewHolidayComponent, {backdrop:"static"});
    modalRef.componentInstance.name = 'World';

  }
 
}

