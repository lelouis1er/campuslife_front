import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardViewComponent } from "./card-view.component";

@NgModule({
  imports: [CommonModule],
  exports: [CardViewComponent],
  declarations : [CardViewComponent]
})
export class CardViewModule { }
