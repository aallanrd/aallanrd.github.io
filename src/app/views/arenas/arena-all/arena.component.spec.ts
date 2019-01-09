import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { MatTableModule } from "@angular/material";
import { RouterTestingModule } from '@angular/router/testing';

import { ArenaComponent } from './arena.component';
import { ApiService } from '../../../api.service';

const dummyArenas: any[] = 
[{
	name: 'Arena 1',
	opened : new Date('01/01/1999'),
	cost: 98000000,
	location: 'Arena Location',
	address: 'Arena Address',
	capacity: 15800,
	_id: '123abc123abc'
},
{
	name: 'Arena 2',
	opened : new Date('01/01/1999'),
	cost: 135000000,
	location: 'Arena Location',
	address: 'Arena Address',
	capacity: 19500,
	_id: '123abc123abc'
}];

class FakeArenasApiService {
	getArenas(){
		return of(dummyArenas);
	}
}

describe('ArenaComponent', () => {
  let component: ArenaComponent;
  let fixture: ComponentFixture<ArenaComponent>;

  beforeEach(async(() => {
	let injector;
	let api: ApiService;
	
    TestBed.configureTestingModule({
	  providers: [ { provide: ApiService, useClass: FakeArenasApiService } ],	
      declarations: [ ArenaComponent ],
	  imports: [
		  RouterModule, 
		  RouterTestingModule,
		  HttpClientTestingModule, 
		  MatTableModule
	  ]
    })
    .compileComponents();
	
	injector = getTestBed();
	api = injector.get(ApiService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  describe('#ngOnInit', () => {
    it('should load the Arenas', () => {
      component.ngOnInit();
      component.arenas.subscribe(arenas => {
        expect(arenas.length).toBe(2);
        expect(arenas).toEqual(dummyArenas);
      });
    });
  });
  

});
