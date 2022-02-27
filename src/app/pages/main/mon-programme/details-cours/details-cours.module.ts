import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DetailsCoursComponent } from "./details-cours.component";


@NgModule({
  imports: [CommonModule],
  declarations : [DetailsCoursComponent],
  exports : [DetailsCoursComponent]
})
export class DetailsCoursModule{}
