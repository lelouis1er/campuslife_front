import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { BlogComponent } from "./blog.component";


const routes : Routes = [
  {path : "", component: BlogComponent}
]


@NgModule({
  exports : [RouterModule],
  imports : [RouterModule.forChild(routes)]
})
export class BlogRoutingModule {}
