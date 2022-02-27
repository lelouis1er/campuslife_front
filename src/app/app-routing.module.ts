import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGard } from './gards/auth.gard';
import { LoginGards } from './gards/login.gards';
import { ActiveFormComponent } from './pages/home/active-form/active-form.component';
import { LoginFormComponent } from './pages/home/login-form/login-form.component';
import { RegisterFormComponent } from './pages/home/register-form/register-form.component';
import { TemplateLoginComponent } from './template/template-login/template-login.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  {
    path: 'home',
    children : [
      {
        path: '',
        component: TemplateComponent,
        children: [
          {
            path: '',
            loadChildren:() => import('src/app/pages/home/home.module').then(m=>m.HomModule),
          }
        ]
      },
      {
        path:  'login',
        component: TemplateLoginComponent,
        canActivate: [LoginGards],
        children: [
          {
            path: '',
            component: LoginFormComponent
          }
        ]
      },
      {
        path:  'register',
        component: TemplateLoginComponent,
        canActivate: [LoginGards],
        children: [
          {
            path: '',
            component: RegisterFormComponent
          }
        ]
      },
      {
        path:  'active-account',
        component: TemplateLoginComponent,
        canActivate: [LoginGards],
        children: [
          {
            path: '',
            component: ActiveFormComponent
          }
        ]
      }
    ]
  },
  {
    path: 'main',
    component: TemplateComponent,
    canActivate: [AuthGard],
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/pages/main/main.module').then(m => m.MainModule),
        canActivate: [AuthGard]
      }
    ]
  },
  {
    path: 'blog',
    component: TemplateComponent,
    canActivate: [AuthGard],
    children: [
      {
        path: "",
        loadChildren: ()=> import ('src/app/pages/blog/blog.module').then(m => m.BlogModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
