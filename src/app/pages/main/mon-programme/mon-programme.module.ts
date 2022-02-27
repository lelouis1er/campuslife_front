import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponentsModule } from "src/app/app-components.module";
import { MonProgrammeComponent } from "./mon-programme.component";
import { MonProgrammeRoutingModule } from "./mon-programme.routing";


@NgModule({
  imports: [CommonModule, AppComponentsModule],
  exports: [MonProgrammeRoutingModule],
  declarations: [MonProgrammeComponent]
})
export class MonProgrammeModule{}
