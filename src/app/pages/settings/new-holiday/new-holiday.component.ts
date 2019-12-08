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
    name : "",
    date  : ""
  };
  constructor(private activeModal : NgbActiveModal,
    private settingService : SettingsService) { 
    
  }

  ngOnInit() {
  }

  onFormSubmit(e, form){
  console.log(this.holiday);
  this.settingService.addHoliday(this.holiday).subscribe(
    (res:any)=>{
      this.activeModal.close();
    }
  );
  }

}
 