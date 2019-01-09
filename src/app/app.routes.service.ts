import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuard } from './auth.guard';

import { TeamComponent } from './views/teams/team-all/team.component';
import { TeamCreateComponent } from './views/teams/team-create/team-create.component';
import { TeamEditComponent } from './views/teams/team-edit/team-edit.component';
import { TeamDetailsComponent } from './views/teams/team-details/team-details.component';

import { ArenaComponent } from './views/arenas/arena-all/arena.component';
import { ArenaCreateComponent } from './views/arenas/arena-create/arena-create.component';
import { ArenaEditComponent } from './views/arenas/arena-edit/arena-edit.component';
import { ArenaDetailsComponent } from './views/arenas/arena-details/arena-details.component';

import { HomeComponent } from './views/home/home.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { UsersComponent } from './views/users/users.component';
import { PagenotfoundComponent } from './views/pagenotfound/pagenotfound.component';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'teams', component: TeamComponent, canActivate: [AuthGuard], data: { title: 'Team List' } },
  { path: 'team-details/:id', component: TeamDetailsComponent, canActivate: [AuthGuard] },
  { path: 'team-create', component: TeamCreateComponent, canActivate: [AuthGuard], data: { title: 'Create Team' } },
  { path: 'team-edit/:id', component: TeamEditComponent, canActivate: [AuthGuard], data: { title: 'Edit Team' } },
  { path: 'arenas', component: ArenaComponent, canActivate: [AuthGuard], data: { title: 'Arena List' } },
  { path: 'arena-details/:id', component: ArenaDetailsComponent, canActivate: [AuthGuard], data: { title: 'Arena Details' } },
  { path: 'arena-create', component: ArenaCreateComponent, canActivate: [AuthGuard], data: { title: 'Create Arena' } },
  { path: 'arena-edit/:id', component: ArenaEditComponent, canActivate: [AuthGuard], data: { title: 'Edit Arena' }},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', component: PagenotfoundComponent }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
