import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { ArenaDetailsComponent } from './arena-details.component';

import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatCardModule, MatIconModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

import { ApiService } from '../../../api.service';

const dummyArena: any = 
{
	name: 'Arena Example',
	opened : new Date('01/01/1999'),
	cost: 150000000,
	location: 'Arena Location',
	address: 'Arena Address',
	capacity: 21000,
	_id: 'abcdefg123456'
}

class FakeArenasApiService {
	getArena(id){
		return of(dummyArena);
	}
}

describe('ArenaDetailsComponent', () => {
  let component: ArenaDetailsComponent;
  let fixture: ComponentFixture<ArenaDetailsComponent>;

  beforeEach(async(() => {
	let injector;
	let api: ApiService;
	
    TestBed.configureTestingModule({
	  providers: [ { provide: ApiService, useClass: FakeArenasApiService } ],	
      declarations: [ ArenaDetailsComponent ],
	  imports: [
		  RouterModule, 
		  RouterTestingModule,
		  HttpClientTestingModule, 
		  FormsModule,
		  ReactiveFormsModule,
		  MatInputModule,
		  MatCardModule,
		  MatIconModule,
		  BrowserAnimationsModule
	  ]
    })
    .compileComponents();
	
	injector = getTestBed();
	api = injector.get(ApiService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArenaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  describe('#ngOnInit', () => {
    it('should load existing Arena', () => {
      component.ngOnInit();
	  let arenaName = fixture.debugElement.query(By.css('#arenaName')).nativeElement;
	  fixture.detectChanges();
	  expect(arenaName.textContent).toBe('Arena Example');
    });
  });
});
