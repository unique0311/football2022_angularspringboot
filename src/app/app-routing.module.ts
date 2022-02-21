import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import  {WelcomeComponent} from './welcome/welcome.component';
import {TodosListComponent} from './todos-list/todos-list.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
const routes: Routes = [
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'welcome/:name',
    component:WelcomeComponent,
    canActivate:[RouteGuardService]
  },
  {
    path:'welcome',
    component:WelcomeComponent,
    canActivate:[RouteGuardService]
  },
  {
     path:'todos',
     component:TodosListComponent,
     canActivate:[RouteGuardService]
  },
  {
    path:'', 
    component:WelcomeComponent,
    canActivate:[RouteGuardService]
  },
  {
    path:'logout',
    component:LogoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
