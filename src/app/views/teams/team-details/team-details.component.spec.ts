import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { TeamDetailsComponent } from './team-details.component';

import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatCardModule, MatIconModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

import { ApiService } from '../../../api.service';

const dummyTeam: any = 
{
	name: 'Team Example',
	founded : new Date('01/01/1989'),
	ownership: 'Owner #1',
	coach: 'Coach One',
	affiliations: 'Affiliations of 1',
	arena_id: '111222333444555',
	_id: '12345678'
}

class FakeTeamsApiService {
	getTeam(id){
		return of(dummyTeam);
	}
}

describe('TeamDetailsComponent', () => {
  let component: TeamDetailsComponent;
  let fixture: ComponentFixture<TeamDetailsComponent>;

  beforeEach(async(() => {
	let injector;
	let api: ApiService;
	
    TestBed.configureTestingModule({
	  providers: [ { provide: ApiService, useClass: FakeTeamsApiService } ],	
      declarations: [ TeamDetailsComponent ],
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
    fixture = TestBed.createComponent(TeamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    
  describe('#ngOnInit', () => {
    it('should load existing Team', () => {
      component.ngOnInit();
	  let arenaName = fixture.debugElement.query(By.css('#teamName')).nativeElement;
	  fixture.detectChanges();
	  expect(arenaName.textContent).toBe('Team Example');
    });
  });
  
});
