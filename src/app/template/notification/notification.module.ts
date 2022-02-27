import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AlertModule } from "ngx-bootstrap/alert";
import { NotificationComponent } from "./notification.component";


@NgModule({
  imports: [CommonModule, NgbModule, AlertModule],
  exports: [NotificationComponent],
  declarations: [NotificationComponent]
})
export class NotificationModule{}
