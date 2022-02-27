import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StartComponent } from "./start.component";
import { StartRoutingModule } from "./start.routing";


@NgModule({
  imports: [CommonModule],
  exports: [StartRoutingModule],
  declarations: [StartComponent]
})
export class StartModule{}
