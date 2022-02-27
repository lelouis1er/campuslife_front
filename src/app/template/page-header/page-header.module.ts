import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PageHeaderComponent } from "./page-header.component";

@NgModule({
  imports: [CommonModule, NgbModule],
  exports: [PageHeaderComponent],
  declarations: [PageHeaderComponent]
})
export class PageHeaderModule{}
