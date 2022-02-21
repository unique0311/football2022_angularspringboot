import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import  {WelcomeComponent} from './welcome/welcome.component';
import {TodosListComponent} from './todos-list/todos-list.component';
import { LogoutComponent } from './logout/logout.component';
const routes: Routes = [
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'welcome/:name',
    component:WelcomeComponent,
  },
  {
    path:'welcome',
    component:WelcomeComponent,
  },
  {
     path:'todos',
     component:TodosListComponent,
  },
  {
    path:'', 
    component:WelcomeComponent
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
