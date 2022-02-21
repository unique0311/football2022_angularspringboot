import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import  {WelcomeComponent} from './welcome/welcome.component';
import {TodosListComponent} from './todos-list/todos-list.component';
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
     path:'todos',
     component:TodosListComponent,
  },
  {
    path:'', 
    component:WelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
