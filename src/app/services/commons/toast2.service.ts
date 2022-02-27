import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class Toast2Service {

  constructor() { }

  getToast() {
    return Swal;
  }
}
