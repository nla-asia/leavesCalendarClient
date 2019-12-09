import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarService } from 'src/app/services/calendar.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-new-leave',
  templateUrl: './new-leave.component.html',
  styleUrls: ['./new-leave.component.scss']
})
export class NewLeaveComponent implements OnInit {
  public leave:any = {
    type : "",
    start_date : "",
    end_date : "",
    reason : ""
  }
  @Input() calendarData:any = {};
  public leaveTypes:any = [];
  constructor(private activeModal : NgbActiveModal,
    private calendarService : CalendarService,
    private settingsService : SettingsService) {
    
   }

  ngOnInit() {

    this.leave.start_date = this.calendarData.startStr;
    this.leave.end_date  = this.calendarData.endStr;

    this.settingsService.getleaveTypes().subscribe(
      (res:any)=>{
        if(res.data){
          this.leaveTypes = res.data;
        }
      }
    );

  }

  ngAfterViewInit(){
    console.log(this.calendarData);
  }

  onFormSubmit(e, form){

    // let {start_date, end_date} = this.leave;
    // this.leave.start_date = start_date.year+"-"+start_date.month+"-"+start_date.day;
    // this.leave.end_date = end_date.year+"-"+end_date.month+"-"+end_date.day;

    this.calendarService.submitNewLeave(this.leave).subscribe((res:any)=>{
      this.activeModal.close();
      window.location.reload();
    });
  }

}
