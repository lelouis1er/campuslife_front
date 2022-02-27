import { Input, Component, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService } from 'src/app/services/commons/toast.service';

@Injectable({
  providedIn: 'root'
})
@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
    @Input()
    public alerts: Array<IAlert> = [];
    private backup: Array<IAlert>;

    private alertSubcription!: Subscription;

    constructor(
      private _toast: ToastService
    ) {

      this.alertSubcription = this._toast.alertSubject.subscribe((value: Array<IAlert>)=>{
        this.alerts = value;
      });


      this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
    }

    public closeAlert(alert: IAlert) {
        this._toast.closeAlert(alert);
    }

    public closeAllAlert() {
      this.alerts.forEach((value)=>{
        this.closeAlert(value);
      });
    }
}

export interface IAlert {
    id: number;
    type: string;
    message: string;
    icon?: string;
}
