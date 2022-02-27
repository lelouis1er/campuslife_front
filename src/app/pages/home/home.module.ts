import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponentsModule } from "src/app/app-components.module";
import { NavbarModule } from "src/app/template/navbar/navbar.module";
import { ActiveFormComponent } from "./active-form/active-form.component";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing";
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';


@NgModule({
  imports:[
    CommonModule,
    AppComponentsModule,
    HomeRoutingModule,
    NavbarModule
  ],
  declarations: [
    HomeComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ActiveFormComponent
  ],
  exports: []
})
export class HomModule{}
