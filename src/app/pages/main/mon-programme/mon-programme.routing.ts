import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailsCoursComponent } from "./details-cours/details-cours.component";
import { MonProgrammeComponent } from "./mon-programme.component";


const routes: Routes = [
  {
    path: "",
    component: MonProgrammeComponent
  },
  {
    path: "details",
    component: DetailsCoursComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonProgrammeRoutingModule{}
