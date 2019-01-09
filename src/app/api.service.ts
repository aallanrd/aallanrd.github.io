import { Injectable } from '@angular/core';
import { Subject, Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const teamApiUrl = "/api/teams";
const arenaApiUrl = "/api/arenas";
const authApiUrl = "/api/auth";
const registerUrl = authApiUrl+'/register';
const loginUrl = authApiUrl+'/login';
const meUrl = authApiUrl+'/me';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	constructor(private http: HttpClient) { }

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			  // A client-side or network error occurred. Handle it accordingly.
			  console.error('An error occurred:', error.error.message);
		}
		else {
		// The backend returned an unsuccessful response code.
		// The response body may contain clues as to what went wrong,
		console.error(
		  `Backend returned code ${error.status}, ` +
		  `body was: ${error.error}`);
		}
	// return an observable with a user-facing error message
	return throwError('Something bad happened; please try again later.');
	};

	private extractData(res: Response) {
	  let body = res;
	  return body || { };
	};


    //--------------------//
	// USERS API ROUTES
	//--------------------//
    postUser(data): Observable<any> {
	  return this.http.post(teamApiUrl, data, httpOptions)
		.pipe(
		  catchError(this.handleError)
		);
	};

	//--------------------//
	// TEAMS API ROUTES
	//--------------------//
	getTeams(): Observable<any> {
		httpOptions.headers = httpOptions.headers.set('x-access-token', localStorage.getItem('token'));
		return this.http.get(teamApiUrl, httpOptions).pipe(
		map(this.extractData),
		catchError(this.handleError));
	};

	getTeam(id: string): Observable<any> {
		httpOptions.headers = httpOptions.headers.set('x-access-token', localStorage.getItem('token'));
		const url = `${teamApiUrl}/${id}`;
		return this.http.get(url, httpOptions).pipe(
		map(this.extractData),
		catchError(this.handleError));
	};

	postTeam(data): Observable<any> {
		httpOptions.headers = httpOptions.headers.set('x-access-token', localStorage.getItem('token'));
		return this.http.post(teamApiUrl, data, httpOptions)
		.pipe(
		  catchError(this.handleError)
		);
	};

	updateTeam(id: string,data): Observable<any> {
		httpOptions.headers = httpOptions.headers.set('x-access-token', localStorage.getItem('token'));
		const url = `${teamApiUrl}/${id}`;
		return this.http.put(url, data, httpOptions)
			.pipe(
			catchError(this.handleError)
		);
	};

	deleteTeam(id: string): Observable<{}> {
		httpOptions.headers = httpOptions.headers.set('x-access-token', localStorage.getItem('token'));
		const url = `${teamApiUrl}/${id}`;
		return this.http.delete(url, httpOptions)
			.pipe(
		  catchError(this.handleError)
		);
	};


	//--------------------//
	// ARENAS API ROUTES
	//--------------------//
	getArenas(): Observable<any> {
		httpOptions.headers = httpOptions.headers.set('x-access-token', localStorage.getItem('token'));
		return this.http.get(arenaApiUrl, httpOptions).pipe(
		map(this.extractData),
		catchError(this.handleError));
	};

	getArena(id: string): Observable<any> {
		httpOptions.headers = httpOptions.headers.set('x-access-token', localStorage.getItem('token'));
		const url = `${arenaApiUrl}/${id}`;
		return this.http.get(url, httpOptions).pipe(
			map(this.extractData),
			catchError(this.handleError)
		);
	};

	postArena(data): Observable<any> {
		httpOptions.headers = httpOptions.headers.set('x-access-token', localStorage.getItem('token'));
		  return this.http.post(arenaApiUrl, data, httpOptions)
			.pipe(
			  catchError(this.handleError)
			);
	};

	updateArena(id: string,data): Observable<any> {
		httpOptions.headers = httpOptions.headers.set('x-access-token', localStorage.getItem('token'));
		const url = `${arenaApiUrl}/${id}`;
		return this.http.put(url, data, httpOptions)
		.pipe(
		  catchError(this.handleError)
		);
	};

	deleteArena(id: string): Observable<{}> {
		httpOptions.headers = httpOptions.headers.set('x-access-token', localStorage.getItem('token'));
		const url = `${arenaApiUrl}/${id}`;
		return this.http.delete(url, httpOptions)
		.pipe(
		  catchError(this.handleError)
		);
	};
	
	//--------------------------//
	// AUTHENTICATIOn API ROUTES
	//--------------------------//
	
	public isLoggedIn = new Subject();
	
	registerUser(data): Observable<any> {
	  return this.http.post(registerUrl, data, httpOptions)
		.pipe(
		  catchError(this.handleError)
		);
	};
	
	loginUser(data): Observable<any> {
	  return this.http.post(loginUrl, data, httpOptions)
      .pipe(
		map(this.extractData),
		catchError(this.handleError));
	}

	logoutUser() {
		localStorage.removeItem('token');
	}
	
	setUserLoggedIn(logged:boolean){
		this.isLoggedIn.next(logged);		
	}
		
	verifyToken(token): Observable<any> {
	  let httpHeader = {
		headers: new HttpHeaders({'x-access-token': token})
	  };
	  return this.http.get(meUrl, httpHeader)
      .pipe(
		map(this.extractData),
		catchError(this.handleError));
	}
}
