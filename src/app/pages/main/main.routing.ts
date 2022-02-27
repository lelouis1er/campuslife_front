import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: "mon-programme",
    loadChildren: () => import('src/app/pages/main/mon-programme/mon-programme.module').then(m => m.MonProgrammeModule),
  },
  {
    path: "",
    redirectTo: "mon-programme",
    pathMatch: "full"
  }
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class MainRoutingModule{}

