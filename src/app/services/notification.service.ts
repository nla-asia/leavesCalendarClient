import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { 

  }

  showMessage(msg:string){
    Swal.fire("Error", msg);
  }

}
