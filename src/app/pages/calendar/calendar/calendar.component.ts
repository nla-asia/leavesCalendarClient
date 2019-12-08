import { Component, OnInit, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewLeaveComponent } from '../new-leave/new-leave.component';
import { CalendarService } from 'src/app/services/calendar.service';

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
    private calendarService : CalendarService) { 

  }

  ngOnInit() {
   this.calendarService.getMyLeaves(0,1000).subscribe(
     (res:any)=>{
       console.log(res);
      if(res.data){
       this.leaves = res.data.map((el,i)=>{return {title : el.employee_id, start: new Date(el.start_date)}});
       console.log(this.leaves);
       this.calendarEvents = this.leaves;
      }
     },
     (err)=>{
       console.log(err);
     }
   );
  }

  handleDateClick(arg) {
   console.log(arg);
   // alert("You clicked it");
  }

  handleDateSelect(arg){
    console.log(arg);
    const modalRef = this.modalService.open(NewLeaveComponent, {backdrop:"static"});
    modalRef.componentInstance.name = 'World';
  }

}
