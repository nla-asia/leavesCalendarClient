import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarService } from 'src/app/services/calendar.service';

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
  @Input() name:any;
  constructor(private activeModal : NgbActiveModal,
    private calendarService : CalendarService) {

   }

  ngOnInit() {

  }

  onFormSubmit(e, form){
    this.calendarService.submitNewLeave(this.leave).subscribe((res:any)=>{
      this.activeModal.close();
    });
  }

}
