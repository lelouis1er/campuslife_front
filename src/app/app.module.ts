import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { FooterComponent } from './template/footer/footer.component';
import { UserIdleModule } from 'angular-user-idle';
import { HttpClientModule } from '@angular/common/http';
import { AppComponentsModule } from './app-components.module';
import { AuthGard } from './gards/auth.gard';
import { UserService } from './services/user.service';
import { LoginGards } from './gards/login.gards';
import { LoginService } from './services/login.service';
import { AuthInterceptorProviders } from './services/commons/auth.interceptor';
import { TemplateLoginComponent } from './template/template-login/template-login.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    FooterComponent,
    TemplateLoginComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    UserIdleModule.forRoot({
      idle: 300, timeout: 1, ping: 0
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    AppComponentsModule
  ],
  providers: [
    AuthGard,
    LoginGards,
    UserService,
    LoginService,
    AuthInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
