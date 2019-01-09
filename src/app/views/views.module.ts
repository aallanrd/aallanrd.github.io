import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, 
  MatToolbarModule, 
  MatSidenavModule,
  MatListModule, 
  MatGridListModule, 
  MatMenuModule,
  MatDatepickerModule,
  MatAutocompleteModule,
  MatSelectModule} from "@angular/material";

//Layout Components
import { HeaderComponent } from '../main-layout/header/header.component';
import { FooterComponent } from '../main-layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
//Team Components
import { TeamComponent } from './teams/team-all/team.component';
import { TeamCreateComponent } from './teams/team-create/team-create.component';
import { TeamEditComponent } from './teams/team-edit/team-edit.component';
import { TeamDetailsComponent } from './teams/team-details/team-details.component';
//Arena Components
import { ArenaComponent } from './arenas/arena-all/arena.component';
import { ArenaCreateComponent } from './arenas/arena-create/arena-create.component';
import { ArenaEditComponent } from './arenas/arena-edit/arena-edit.component';
import { ArenaDetailsComponent } from './arenas/arena-details/arena-details.component';
//User Components
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
//Page 404
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
	ReactiveFormsModule,
    BrowserModule,	
	BrowserAnimationsModule,
	MatInputModule,
	MatTableModule,
	MatPaginatorModule,
	MatSortModule,
	MatProgressSpinnerModule,
	MatIconModule,
	MatButtonModule,
	MatCardModule,
	MatFormFieldModule,
	MatToolbarModule,
	MatSidenavModule,
	MatListModule,
	MatGridListModule,
	MatMenuModule,
	MatDatepickerModule,
	MatMomentDateModule,
	MatAutocompleteModule,
	MatSelectModule
  ],
  declarations: [
    FooterComponent,
	HeaderComponent,
    TeamComponent,
    TeamCreateComponent,
    TeamEditComponent,
    TeamDetailsComponent,
	ArenaComponent,
    ArenaCreateComponent,
    ArenaEditComponent,
    ArenaDetailsComponent,
	HomeComponent,
	RegisterComponent,
	LoginComponent,
	PagenotfoundComponent,
	UsersComponent
  ],
  exports: [
    FooterComponent,
	HeaderComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewsModule { }
