import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-leaves-report',
  templateUrl: './leaves-report.component.html',
  styleUrls: ['./leaves-report.component.scss']
})
export class LeavesReportComponent implements OnInit {
  public query:any = {
    employee_id : "",
    start_date : "",
    end_date : ""
  };
  public leaves:any = [];
  public hasLeaves:Boolean = true;
  public employees:any = [];
  constructor(private reportsService : ReportsService,
    private auth: AuthService) {

   }

  ngOnInit() {
   // this.fetchLeaves();
    this.auth.getAllEmployees().subscribe(
      (res:any)=>{
      if(res.data){
        this.employees = res.data;
      }
      },
      (err:any)=>{
        console.log(err);
      }
    );
  }



  fetchLeaves(){
    let {start_date, end_date} = this.query;
    this.query.start_date =  start_date ? start_date.year+"-"+start_date.month+"-"+start_date.day :  "";
    this.query.end_date =  end_date ? end_date.year+"-"+end_date.month+"-"+end_date.day : "";
    this.reportsService.getLeaves(this.query).subscribe(
      (res:any)=>{
        console.log(res);
        if(res.data){
          this.leaves = res.data;
        }
      },
      (err:any)=>{
        console.log(err);
      }
    );
  }

  downloadExcel(){
    let {start_date, end_date} = this.query;
    this.query.start_date = start_date ? start_date.year+"-"+start_date.month+"-"+start_date.day : "";
    this.query.end_date = end_date ? end_date.year+"-"+end_date.month+"-"+end_date.day : "";
   return this.reportsService.exportLeavesExcel(this.query);
  }

  downloadPDF(){
    let {start_date, end_date} = this.query;
    this.query.start_date = start_date ? start_date.year+"-"+start_date.month+"-"+start_date.day : "";
    this.query.end_date = end_date ? end_date.year+"-"+end_date.month+"-"+end_date.day : "";
    return this.reportsService.exportLeavesPDF(this.query);
  }

}
