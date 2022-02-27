import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IAlert, NotificationComponent } from 'src/app/template/notification/notification.component';


@Injectable({
  providedIn: 'root'
})
export class ToastService {


  alerts: Array<IAlert> = [];
  alertSubject = new Subject<Array<IAlert>>();

  autoCloseTime : number = 50000; // durée de l'alert 5s

  constructor(

  ) { }

    emintAlert(){
      this.alertSubject.next(this.alerts.slice());
    }

    /**
     * add single toast message
     * @param severity Severity level of the message, valid values are "success", "info", "warn" and "error"
     * @param detail Detail text of the message.
     */
    addSingle(severity: string, detail: string) {

      this.alerts.push({
        id: 1, message: detail, type: severity
      });
      this.emintAlert();
      setTimeout(() => {
        this.alerts.splice(0, this.alerts.length);
        this.emintAlert();
      }, this.autoCloseTime);
    }

    public closeAlert(alert: IAlert) {
      const index: number = this.alerts.indexOf(alert);
      this.alerts.splice(index, 1);
      this.emintAlert();
    }

    /**
     * add multiple toast messages
     * @param messages
     * array of message type {severity:'success', summary:'Service Message', detail:'Via MessageService'}
     */
    addMultiple(messages: any) {
        //this.messageService.addAll(messages);
    }

    /**
     * clear all toast messages
     */
    clear() {
        //this.messageService.clear();
    }
}

export enum Severity {
  'success', 'info', 'warning', 'danger'
}
