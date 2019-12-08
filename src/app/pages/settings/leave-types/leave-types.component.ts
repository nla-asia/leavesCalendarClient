import { Component, OnInit } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewLeaveTypeComponent } from '../new-leave-type/new-leave-type.component';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-leave-types',
  templateUrl: './leave-types.component.html',
  styleUrls: ['./leave-types.component.scss']
})
export class LeaveTypesComponent implements OnInit {
  public leaveTypes:any = [];
  public hasLeaveTypes:Boolean = true;
  constructor(private modalService: NgbModal,
    private settingsService: SettingsService) { 

  }

  ngOnInit() {
    this.fetchleaveTypes();
  }

  fetchleaveTypes(){
    this.settingsService.getleaveTypes().subscribe(
      (res:any)=>{
        if(res.data && res.data.length>0){
          this.leaveTypes = res.data;
        }else{
          this.hasLeaveTypes = false;
        }
      },
      (err:any)=>{
        console.log(err);
      }
    );
  }

  openNewLeaveType(e){
      const modalRef = this.modalService.open(NewLeaveTypeComponent, {backdrop:"static"});
      modalRef.componentInstance.name = 'World';
  }

  onDelete(id){
    var yes = confirm("Are you sure to remove this?");
    if(!yes){return;}
    this.settingsService.removeleaveType(id).subscribe(
      (res:any)=>{
        this.fetchleaveTypes();
      }
    );
  }

}
