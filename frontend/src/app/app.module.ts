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
import { PlayerFormComponent } from './player-form/player-form.component';
import { MatchesComponent } from './matches/matches.component';
import { MatchFormComponent } from './match-form/match-form.component';
import { RegisterComponent } from './register/register.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import {MatchModalComponent} from './match-modal/match-modal.component'
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    MatchModalComponent,
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    TodosListComponent,
    MenuComponent,
    LogoutComponent,
    TeamsComponent,
    TeamFormComponent,
    PlayersComponent,
    PlayerFormComponent,
    MatchesComponent,
    MatchFormComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularEmojisModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    OrderModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
