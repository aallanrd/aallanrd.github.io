import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import { Subject, Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
	  imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
	
	service = TestBed.get(ApiService);
	httpMock = TestBed.get(HttpTestingController);
  });
  
  afterEach(() => {
	  httpMock.verify();
  });
  
  describe('#getArenas', () => {
	  it('should retrieve arenas from API GET', () => {
		const dummyArenas: any[] = 
		[{
			name: 'Arena1',
			opened : '01/01/1999',
			cost: 150000000,
			location: 'Arena Location',
			address: 'Arena Address',
			capacity: 21000
		}];
		
		service.getArenas().subscribe(arenas => {
			expect(arenas.length).toBe(1);
			expect(arenas).toEqual(dummyArenas);
		});
		
		const request = httpMock.expectOne('/api/arenas');
		expect(request.request.method).toBe('GET');
		request.flush(dummyArenas);
			
	  });
  });

});
