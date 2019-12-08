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
   this.fetchHolidays();
  }

  fetchHolidays(){
    this.settingsService.getHolidays().subscribe(
      (res:any)=>{
        if(res.data && res.data.length >0){
          this.holidays = res.data;
        }else{
          this.hasHolidays = false;
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

  onDeleteHoliday(id){
    var yes = confirm("Are you sure to remove this holiday?");
    if(!yes){
      return;
    }
    this.settingsService.removeHoliday(id).subscribe((res:any)=>{
    this.fetchHolidays();
    },(err:any)=>{
      console.log(err);
    });
  }
 
}

