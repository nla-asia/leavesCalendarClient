import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-new-leave-type',
  templateUrl: './new-leave-type.component.html',
  styleUrls: ['./new-leave-type.component.scss']
})
export class NewLeaveTypeComponent implements OnInit {
  @Input() name:any;
  public leaveType:any = {
    name : "",
    description  : "",
    days_per_year : ""
  };
  constructor(private activeModal : NgbActiveModal,
    private settingsService : SettingsService) { 
   
  }

  ngOnInit() {
    
  }

  onFormSubmit(e, form){
    console.log(this.leaveType);
    this.settingsService.addleaveType(this.leaveType).subscribe(
      (res:any)=>{
      this.activeModal.close();
      },
      (err:any)=>{
        console.log(err);
      }
    );

  }

}
