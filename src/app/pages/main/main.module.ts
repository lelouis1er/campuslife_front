import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { AppComponentsModule } from 'src/app/app-components.module';
import { MainRoutingModule } from './main.routing';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    AppComponentsModule,
    MainRoutingModule
  ]
})
export class MainModule { }
