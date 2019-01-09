import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { AppRoutes } from './app.routes.service';

import { LayoutModule } from '@angular/cdk/layout';

import { AuthGuard } from './auth.guard';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
	AppComponent,
  ],
  imports: [  
	  BrowserModule,
	  HttpClientModule, 
	  ViewsModule,
	  AppRoutes, 
	  JwtModule.forRoot({
		config: {
		  tokenGetter: tokenGetter
        }
      })
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},AuthGuard],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
