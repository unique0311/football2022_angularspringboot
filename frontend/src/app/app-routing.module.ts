import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import  {WelcomeComponent} from './welcome/welcome.component';
import {TodosListComponent} from './todos-list/todos-list.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TeamsComponent } from './teams/teams.component';
import { TeamFormComponent } from './team-form/team-form.component';
import { PlayersComponent } from './players/players.component';
import { PlayerFormComponent } from './player-form/player-form.component';
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
  }, 
  {
    path:'teams',
    component:TeamsComponent,
    canActivate:[RouteGuardService]
  }, 
  {
    path:'addteam',
    component:TeamFormComponent,
    canActivate:[RouteGuardService]
  }, 
  {
    path:'players',
    component:PlayersComponent,
    canActivate:[RouteGuardService]
  },
  {
    path:'addplayer',
    component:PlayerFormComponent,
    canActivate:[RouteGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
