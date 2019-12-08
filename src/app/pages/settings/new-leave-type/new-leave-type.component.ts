import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-leave-type',
  templateUrl: './new-leave-type.component.html',
  styleUrls: ['./new-leave-type.component.scss']
})
export class NewLeaveTypeComponent implements OnInit {
  @Input() name:any;
  public leaveType:any = {
    name : "",
    description  : ""
  };
  constructor(private activeModal : NgbActiveModal) { 

  }

  ngOnInit() {
  }

  onFormSubmit(e){
    console.log(this.leaveType);
  }

}
