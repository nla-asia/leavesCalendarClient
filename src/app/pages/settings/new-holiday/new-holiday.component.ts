import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SettingsService } from 'src/app/services/settings.service';


@Component({
  selector: 'app-new-holiday',
  templateUrl: './new-holiday.component.html',
  styleUrls: ['./new-holiday.component.scss']
})
export class NewHolidayComponent implements OnInit {
  @Input() name:any;
  public holiday:any = {
    title : "",
    start_date  : "",
    end_date : ""
  };
  constructor(private activeModal : NgbActiveModal,
    private settingService : SettingsService) { 
    
  }

  ngOnInit() {
  }

  onFormSubmit(e, form){
  console.log(this.holiday);
   let {start_date, end_date} = this.holiday;
   this.holiday.start_date = start_date.year+"-"+start_date.month+"-"+start_date.day;
   this.holiday.end_date = end_date.year+"-"+end_date.month+"-"+end_date.day;
  
  this.settingService.addHoliday(this.holiday).subscribe(
    (res:any)=>{
      this.activeModal.close();
      window.location.reload();
    },
    (err:any)=>{
      console.log(err);
    }
  );
  }

}
 