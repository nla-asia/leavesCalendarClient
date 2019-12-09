import { Component, OnInit, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewLeaveComponent } from '../new-leave/new-leave.component';
import { CalendarService } from 'src/app/services/calendar.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public leaves:any = [];

  @ViewChild('calendar',{static:true}) calendarComponent: FullCalendarComponent;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
   // { title: 'Event Now', start: new Date('2019-12-20') }
  ];

  constructor(private modalService: NgbModal,
    private settingsService : SettingsService,
    private calendarService : CalendarService) { 

  }

  ngOnInit() {
   this.fetchLeaves();
   this.fetchHolidays();
  }

  fetchLeaves(){
    this.calendarService.getMyLeaves(0,1000).subscribe(
      (res:any)=>{
        console.log(res);
       if(res.data){
        this.leaves = res.data.map((el,i)=>{return {textColor: "yellow", title : el.employee_name+"("+el.leave_name+")", start: new Date(el.start_date), end: new Date(el.end_date)}});
        console.log(this.leaves);
        this.calendarEvents = this.calendarEvents.concat(this.leaves);
       }
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  fetchHolidays(){
    this.settingsService.getHolidays().subscribe((res:any)=>{
      if(res.data && res.data.length>0){
        let holidays = res.data.map((el,i)=>{return {textColor: "white", title : el.title, start: new Date(el.start_date), end: new Date(el.end_date) }});
        this.calendarEvents = this.calendarEvents.concat(holidays);
      }
    })
  }

  handleDateClick(arg) {
   //console.log(arg);
   // alert("You clicked it");
  }

  handleDateSelect(arg){
    console.log(arg);
    const modalRef = this.modalService.open(NewLeaveComponent, {backdrop:"static"});
    modalRef.componentInstance.calendarData = arg;
  }

  onEventRender(e){
    console.log("event render");
    console.log(e);
  
  }

}
