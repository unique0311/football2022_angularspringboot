import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { MenuComponent } from './menu/menu.component';
import { LogoutComponent } from './logout/logout.component';
import { AngularEmojisModule } from 'angular-emojis';
import { TeamsComponent } from './teams/teams.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamFormComponent } from './team-form/team-form.component';
import { PlayersComponent } from './players/players.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    TodosListComponent,
    MenuComponent,
    LogoutComponent,
    TeamsComponent,
    TeamFormComponent,
    PlayersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularEmojisModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
