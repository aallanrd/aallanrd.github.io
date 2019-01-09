// AuthGuard
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from  '@angular/router';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private router: Router,private api: ApiService) {}
	
	canActivate(
		route: ActivatedRouteSnapshot, 
		state: RouterStateSnapshot):  Observable<boolean> | Promise<boolean> | boolean {
		let token = localStorage.getItem('token');
		if(token == null || token == undefined){
            this.router.navigateByUrl('/login');
			return false;
		}
		return this.api.verifyToken(token)
		.pipe(
			map((res) => {
            if (res['auth'] === true) {
				this.api.setUserLoggedIn(true);
                console.log('authenticated: '+ res['auth']);
                return true;
            }
			else{
				console.log('not authenticated');
				this.api.setUserLoggedIn(false);
				this.router.navigateByUrl('/login');
				return false;
			}
			}),
			catchError((err:HttpErrorResponse) => {
				this.api.setUserLoggedIn(false);
				this.router.navigateByUrl('/login');
				throw(err);
            })

			
		);
	}

}