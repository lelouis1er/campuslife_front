import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BlogComponent } from "./blog.component";
import { BlogRoutingModule } from "./blog.routing";


@NgModule({
  imports: [CommonModule, BlogRoutingModule],
  exports : [BlogComponent],
  declarations : [BlogComponent]
})
export class BlogModule {}
